# explain.dalibo.com

PEV2 Flask application

## Installation

```shell
pip install pipenv
pipenv install
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
FLASK_DEBUG=1 FLASK_APP=app python -m flask run
```

## tests

Run a Postgres instance for the tests:

``` shell
docker run -p 5433:5432 --rm --name explain_tests -e POSTGRES_PASSWORD=postgres -d postgres
```

Launch the tests:

```shell
export DATABASE_URI=postgresql://postgres:postgres@0.0.0.0:5433
pytest
```
