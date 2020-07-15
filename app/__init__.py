from flask import (
    Flask,
    jsonify,
    redirect,
    render_template,
    request,
    session,
    url_for,
)
from flask_wtf import (
    FlaskForm
)
from wtforms import (
    StringField,
    TextAreaField,
)
from wtforms.validators import (
    DataRequired
)
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import datetime
import os
import json
app = Flask(__name__, instance_relative_config=True)

app.config.from_object('config')
app.config.from_pyfile('config.py', silent=True)

db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Plan(db.Model):
    __tablename__ = 'plans'
    id = db.Column(db.String, primary_key=True)
    title = db.Column(db.String)
    created = db.Column(db.DateTime(timezone=True),
                        default=datetime.datetime.utcnow)
    plan = db.Column(db.String)
    sql = db.Column(db.String)
    is_public = db.Column(db.Boolean, default=False)
    delete_key = db.Column(db.String)

    __table_args__ = (
        {'postgresql_partition_by': 'HASH (id)'}
    )


@app.route('/')
def index():
    form = PlanForm()
    deleted = session.pop('deleted', None)
    return render_template('index.html', form=form, deleted=deleted)


@app.route('/about')
def about():
    return render_template('about.html')


class PlanForm(FlaskForm):
    title = StringField('Title')
    plan = TextAreaField('Plan', validators=[DataRequired()])
    sql = TextAreaField('Query')


@app.route('/new', methods=['POST'])
def new():
    '''
    Save the plan in database and return shareable URL
    '''
    form = PlanForm()
    if form.validate_on_submit():
        sql = 'SELECT register_plan(:title, :plan, :sql, :is_public)'
        query = db.session.execute(
            sql,
            {
                'title': form.title.data,
                'plan': form.plan.data,
                'sql': form.sql.data,
                'is_public': False
            }
        )
        db.session.commit()
        result = query.fetchone()[0]
        (id, delete_key) = tuple(x for x in result[1:-1].split(','))
        session['delete_key'] = delete_key
        return redirect(url_for('plan_from_db', id=id))
    return redirect(url_for('index'))


@app.route('/plan', methods=['GET', 'POST'])
def plan():
    form = PlanForm()
    if request.method == 'POST' and form.validate_on_submit():
        plan = dict(
            title=form.title.data,
            plan=form.plan.data,
            sql=form.sql.data
        )
        return render_template('plan.html', plan=plan)
    return redirect(url_for('index'))


@app.route('/plan/<id>')
def plan_from_db(id):
    plan = Plan.query.get_or_404(id)
    delete_key = session.pop('delete_key', None)
    return render_template(
        'plan.html', plan=plan, delete_key=delete_key)


@app.route('/plan/<id>/<key>')
def delete(id, key):
    plan = Plan.query.get_or_404(id)
    if plan.delete_key == key:
        session['deleted'] = id
        db.session.delete(plan)
        db.session.commit()
    return redirect(url_for('index'))


@app.context_processor
def inject_assets():
    def load_assets(type, entrypoint):
        fn = os.path.realpath(__file__ + '/../static/dist/assets.json')
        with open(fn) as f:
            entrypoints = json.load(f)
        if type == 'js':
            tag = '<script src="{}"></script>'
        elif type == 'css':
            tag = '<link rel="stylesheet" href="{}">'
        else:
            raise 'unsupported type'
        assets = entrypoints[entrypoint][type]
        ret = []
        if isinstance(assets, list):
            for asset in assets:
                ret.append(tag.format(url_for('static', filename=asset)))
            return '\n'.join(ret)
        else:
            return tag.format(url_for('static', filename=assets))
    return dict(assets=load_assets)


if __name__ == '__main__':
    app.run()
