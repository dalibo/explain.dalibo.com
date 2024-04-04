import datetime
import json
import os

from flask import Flask, jsonify, redirect, render_template, session, url_for
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired

app = Flask(__name__, instance_relative_config=True)

app.config.from_object("config")
app.config.from_pyfile("config.py", silent=True)

db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Plan(db.Model):
    __tablename__ = "plans"
    id = db.Column(db.String, primary_key=True)
    title = db.Column(db.String)
    created = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow)
    plan = db.Column(db.String)
    sql = db.Column(db.String)
    is_public = db.Column(db.Boolean, default=False)
    delete_key = db.Column(db.String)

    __table_args__ = {"postgresql_partition_by": "HASH (id)"}

    def as_dict(self):
        return dict(
            shareId=self.id,
            title=self.title,
            plan=self.plan,
            sql=self.sql,
        )


@app.route("/")
def index():
    form = PlanForm()
    deleted = session.pop("deleted", None)
    return render_template("index.html", form=form, deleted=deleted)


@app.route("/about")
def about():
    return render_template("about.html")


class PlanForm(FlaskForm):
    title = StringField("Title")
    plan = TextAreaField("Plan", validators=[DataRequired()])
    query = TextAreaField("Query")


@app.route("/new", methods=["POST"])
def new():
    return save()


@app.route("/new.json", methods=["POST"])
def new_json():
    return save(json=True)


def save(json=False):
    """
    Save the plan in database and return shareable URL
    """
    form = PlanForm()
    if form.validate_on_submit():
        sql = "SELECT register_plan(:title, :plan, :query, :is_public)"
        query = db.session.execute(
            sql,
            {
                "title": form.title.data,
                "plan": form.plan.data,
                "query": form.query.data,
                "is_public": False,
            },
        )
        db.session.commit()
        result = query.fetchone()[0]
        (id, delete_key) = tuple(x for x in result[1:-1].split(","))
        if json:
            return jsonify(dict(id=id, deleteKey=delete_key))
        return redirect(url_for("plan_from_db", id=id))
    return redirect(url_for("index"))


@app.route("/plan", methods=["GET"])
def plan():
    return redirect(url_for("plan_error"))


@app.route("/plan/<id>")
def plan_from_db(id):
    plan = Plan.query.get_or_404(id, description="This plan doesn't exist.")
    return render_template("plan.html", plan=plan)


@app.route("/plan/<id>/<key>")
def delete(id, key):
    plan = Plan.query.get_or_404(id, description="This plan doesn't exist.")
    if plan.delete_key == key:
        session["deleted"] = id
        db.session.delete(plan)
        db.session.commit()
    return ("", 204)


@app.context_processor
def inject_assets():
    fn = os.path.realpath(__file__ + "../../static/dist/.vite/manifest.json")
    with open(fn) as f:
        entrypoints = json.load(f)

    def build_url(asset):
        return url_for("static", filename="dist/" + asset)

    def build_js_tag(asset):
        return f'<script type="module" src="{build_url(asset)}"></script>'

    def build_css_tag(assets):
        return "\n".join(
            [f'<link rel="stylesheet" href="{build_url(asset)}">' for asset in assets]
        )

    def load_assets(entrypoint):
        tags = []
        generate_tags(f"app/static/js/{entrypoint}.js", tags)
        return "\n".join(tags)

    def generate_tags(entrypoint, tags):
        if entrypoint in entrypoints:
            manifest_entry = entrypoints[entrypoint]

            if "imports" in manifest_entry:
                for import_ in manifest_entry["imports"]:
                    generate_tags(import_, tags)

            if "file" in manifest_entry:
                tags.append(build_js_tag(manifest_entry["file"]))
            if "css" in manifest_entry:
                tags.append(build_css_tag(manifest_entry["css"]))

    return dict(assets=load_assets)


@app.route("/plan_error")
def plan_error():
    return render_template("plan_error.html")


@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template("404.html", description=str(e)), 404


if __name__ == "__main__":
    app.run()
