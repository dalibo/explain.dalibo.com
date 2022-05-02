import os
WTF_CSRF_ENABLED = False
SECRET_KEY = os.environ.get('SECRET_KEY', 'aSup3rS33kret')
DEBUG = os.environ.get('DEBUG')
DEBUG_TB_INTERCEPT_REDIRECTS = False
DEBUG_TB_PROFILER_ENABLED = True

DOCUMENTATION_URI = "https://mydocumentation.com/visualizer"
