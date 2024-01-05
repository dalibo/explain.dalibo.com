import os
WTF_CSRF_ENABLED = False
SECRET_KEY = os.environ.get('SECRET_KEY', 'aSup3rS33kret')
DB_NAME = os.environ.get('DB_NAME', 'postgres')
DB_USER = os.environ.get('DB_USER', 'postgres')
DB_PASS = os.environ.get('DB_PASS', 'postgres')
DB_SERVICE = os.environ.get('DB_SERVICE', '0.0.0.0')
DB_PORT = os.environ.get('DB_PORT', 5432)
SQLALCHEMY_DATABASE_URI = 'postgresql://{0}:{1}@{2}:{3}/{4}'.format(
    DB_USER, DB_PASS, DB_SERVICE, DB_PORT, DB_NAME
)
DEBUG_TB_INTERCEPT_REDIRECTS = False
DEBUG_TB_PROFILER_ENABLED = True
SQLALCHEMY_TRACK_MODIFICATIONS = False
# GOOGLE_ANALYTICS = "UA-XXXXXX-XX"
