FROM python:3-alpine

ENV FLASK_APP "app"

RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/

RUN \
    apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc g++ musl-dev postgresql-dev && \
    pip install --upgrade pip

RUN \
    pip install -r requirements.txt

ADD . /app

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]
