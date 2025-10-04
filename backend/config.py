import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DB_PATH = os.path.join(BASE_DIR, "../data/deep_eyes.db")

SQLALCHEMY_DATABASE_URI = f"sqlite:///{DB_PATH}"  # trocar para MySQL se quiser
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = os.environ.get("SECRET_KEY", "deepeyes-secret")
