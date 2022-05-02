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

import datetime
import os
import json
app = Flask(__name__, instance_relative_config=True)

app.config.from_object('config')
app.config.from_pyfile('config.py', silent=True)

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
    query = TextAreaField('Query')

@app.route('/plan', methods=['GET'])
def plan():
    return render_template('plan.html')

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
        assets = []
        if entrypoint:
            assets = entrypoints[entrypoint][type]
        ret = []
        if isinstance(assets, list):
            for asset in assets:
                ret.append(tag.format(url_for('static', filename=asset)))
            return '\n'.join(ret)
        else:
            return tag.format(url_for('static', filename=assets))
    return dict(assets=load_assets)


@app.route('/plan_error')
def plan_error():
    return render_template('plan_error.html')


@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html', description=str(e)), 404


if __name__ == '__main__':
    app.run()
