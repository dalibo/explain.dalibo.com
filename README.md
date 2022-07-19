# explain.dalibo.com

PEV2 Flask application

# Installation

```shell
pip install -r requirements.txt
```

Create a config file.

```shell
cp config.py instance
```

Modify the `config.py` file in the `instance` directory if needed.

Run a Postgres instance in a docker container:

```shell
docker run -p 5432:5432 --rm --name explain -e POSTGRES_PASSWORD=postgres -d postgres
```

Create the DB:

```
FLASK_APP=app flask db upgrade
```

## Run

```shell
FLASK_APP=app python -m flask run
```

# Run App Using Docker

```shell
docker-compose up -d
docker-compose run web flask db upgrade
```

Open [http://0.0.0.0:5000/](http://0.0.0.0:5000/) in your browser.

# Build assets

Requires Node > 16

```shell
npm install
npm run build
```

You can also run the app in DEBUG mode. In this case, run the following
commands in two consoles.

```shell
npm run dev
```

```shell
FLASK_DEBUG=1 FLASK_APP=app python -m flask run
```

# Releasing

```shell
git tag -a vx.x.x -m "x.x.x"
git push --tags
```
