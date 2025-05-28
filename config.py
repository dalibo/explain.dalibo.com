import os


def str_to_bool(value: str | None) -> bool:
    if value is None:
        return False
    return value.lower() in {"true", "1", "t", "yes", "y"}


WTF_CSRF_ENABLED = False
SECRET_KEY = os.environ.get("SECRET_KEY", "aSup3rS33kret")
APP_NAME = os.environ.get("APP_NAME", "explain.dalibo.com")
DB_NAME = os.environ.get("DB_NAME", "postgres")
DB_USER = os.environ.get("DB_USER", "postgres")
DB_PASS = os.environ.get("DB_PASS", "postgres")
DB_SERVICE = os.environ.get("DB_SERVICE", "0.0.0.0")
DB_PORT = os.environ.get("DB_PORT", 5432)
SQLALCHEMY_DATABASE_URI = (
    f"postgresql://{DB_USER}:{DB_PASS}@{DB_SERVICE}:{DB_PORT}/{DB_NAME}"
)
DEBUG_TB_INTERCEPT_REDIRECTS = str_to_bool(
    os.environ.get("DEBUG_TB_INTERCEPT_REDIRECTS")
)
DEBUG_TB_PROFILER_ENABLED = str_to_bool(os.environ.get("DEBUG_TB_PROFILER_ENABLED"))
SQLALCHEMY_TRACK_MODIFICATIONS = str_to_bool(
    os.environ.get("SQLALCHEMY_TRACK_MODIFICATIONS")
)
GOOGLE_ANALYTICS = os.environ.get("GOOGLE_ANALYTICS")  # "UA-XXXXXX-XX"
