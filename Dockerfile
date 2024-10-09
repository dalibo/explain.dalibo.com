FROM python:3.12-alpine

ENV FLASK_APP "app"

ADD . /app

WORKDIR /app

RUN apk add --no-cache libpq-dev gcc musl-dev

RUN pip install --no-cache-dir --upgrade pip

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]
