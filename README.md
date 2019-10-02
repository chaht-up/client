# chaht-up

Web app for chatting

## Requirements

- NodeJS 10.x ([nvm](https://github.com/creationix/nvm) recommended)

## Tech Stack

### App

- [formik](https://github.com/jaredpalmer/formik) - React form handler
- [reach router](https://reach.tech/router) - Routing for React
- [react](https://facebook.github.io/react/) - View layer
- [socket.io](https://github.com/socketio/socket.io) - Client side realtime library
- [use-axios-client](https://github.com/angelle-sw/use-axios-client) - Axios hooks wrapper
- [yup](https://github.com/jquense/yup) - Object schema validation

### Dev Tooling

- [cypress](https://github.com/cypress-io/cypress) - e2e browser testing suite
- [eslint](https://eslint.org/) - JS linter

### Build Tooling

- [babel](https://babeljs.io/) - ESNext/JSX/TS compiler
- [create-react-app](https://facebook.github.io/create-react-app/) - React app generator
- [webpack](https://webpack.github.io/) - Module bundler

### Test Tooling

- [jest](https://facebook.github.io/jest/) - Unit test suite

### Deployment

- TODO

### API

- https://github.com/chaht-up/server

## Setup

Clone the repository:

```sh
$ git clone git@github.com:chaht-up/client.git
```

Install dependencies:

```sh
$ yarn
```

## Start

Start the development server at [http://localhost:3000](http://localhost:3000) (implicitly rebuilds on code changes):

```sh
$ yarn start
```

## Test

### Unit Tests

Run unit tests (implicitly re-runs on code changes):

```sh
$ yarn test
```

## Release

### Build

Generate a production release in the `build` directory:

```sh
$ yarn build
```
