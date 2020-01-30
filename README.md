# TODO App

To run this project you need:

- Docker
- Docker compose
- NodeJS@12+
- Mongo
- A coffee ☕️

## API

API following the [JSON API Specs](https://jsonapi.org/)

**PORT: 6000**

```sh
npm run dev # For dev
npm run start # For production
```

## DB

Mongo

- You need docker and docker-compose.
- You can change the root login/password in the yaml file
- You can change the login/password for the API in the seed.js file

```sh
docker-compose up # -d to run in background
```

Test your connection with:

```sh
```