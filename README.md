# TODO App

To run this project you need:

- Docker
- Docker compose
- NodeJS@12+
- Mongo
- A coffee ☕️

Then run `npm install` and start the dev environment with `npm run start`

## API

- API following the [JSON API Specs](https://jsonapi.org/)
- 🚨 Have a look to the .env file. For the purpose of this example this file is commited, in the real world you would never do that.

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
mongo -u api --authenticationDatabase todo_app
```
