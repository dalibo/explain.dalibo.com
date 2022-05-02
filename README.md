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

## Run

```shell
FLASK_DEBUG=1 FLASK_APP=app python -m flask run
```

# Run App Using Docker

```shell
docker-compose up -d
```

Open [http://0.0.0.0:5000/](http://0.0.0.0:5000/) in your browser.

# Build assets

```shell
npm install
npm run watch
```

# Releasing

```shell
git tag -a vx.x.x -m "x.x.x"
git push --tags
```
