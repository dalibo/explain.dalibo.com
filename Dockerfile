FROM python:3.6-slim

ENV FLASK_APP "app"
ENV FLASK_ENV "development"
ENV FLASK_DEBUG True

RUN mkdir /app
WORKDIR /app
COPY Pip* /app/

RUN pip install --upgrade pip && \
    pip install pipenv && \
    pipenv install --dev --system --deploy --ignore-pipfile

ADD . /app

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]
