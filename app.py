from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import datetime
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
    query = db.Column(db.String)
    is_public = db.Column(db.Boolean, default=False)
    delete_key = db.Column(db.String)

    __table_args__ = (
        {'postgresql_partition_by': 'HASH (id)'}
    )


@app.route('/')
def hello():
    return "Hello World!"


if __name__ == '__main__':
    app.run()
