from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Annotation(db.Model):
    __tablename__ = "annotations"
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(500))
