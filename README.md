# TODO App

To run this project you need:

- Docker
- Docker compose
- NodeJS@12+
- Mongo
- A coffee ☕️

```sh
npm install # will install all required depedency

npm run start:database # start the mongodb database
npm run start:api # start the backend (require the database)
npm run start:web # start the frontend (require the api)
```

## TODO

- Better error management (400, 404 & 500)
- showcase reselect
- Tests (cypress | jest)
- CI/CD (Actions)
- Docker + k8
- Lerna with an ui-library
- Api: database abstraction
- Share TS models between api & web
- Router (/router) in api & web

## API

- API following the [JSON API Specs](https://jsonapi.org/)
- 🚨 Have a look to the .env file. For the purpose of this example this file is commited, in the real world you would never do that.

```sh
npm run start
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

## Web

Simple CRA application.

- React & Redux
- Redux Toolkit
- MaterialUI

```sh
/__tests__/ # Integration tests
/components/ # "dumb"/reusable components
/services/ # Global services
/store/ # App state
/features/
          api # Api related code for this feature
          models # TS interface/types
          selectors # feature state selector
          store # feature state
          services # feature service
          *.tests # unit tests
```
