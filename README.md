# explain.dalibo.com

PEV2 Flask application

## Run App Using Docker

```shell
docker-compose up -d
docker-compose run web flask db upgrade
```

Open [http://0.0.0.0:5000/](http://0.0.0.0:5000/) in your browser.

## Build assets

```shell
npm install
npm run watch
```
