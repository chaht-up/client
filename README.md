# chaht-up

Web app for chatting

## Requirements

- NodeJS 10.x ([nvm](https://github.com/creationix/nvm) recommended)

## Tech Stack

### App

- [react](https://facebook.github.io/react/) - View layer
- [socket.io](https://github.com/socketio/socket.io) - Client side realtime library
- [uuid](https://github.com/kelektiv/node-uuid) - RFC-compliant UUID generator

### Dev Tooling

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

- TODO

## Setup

Clone the repository:

```sh
$ git clone git@github.com:chaht-up/client.git
```

Install dependencies:

```sh
$ npm install
```

## Start

Start the development server at [http://localhost:3000](http://localhost:3000) (implicitly rebuilds on code changes):

```sh
$ npm start
```

## Test

### Unit Tests

Run unit tests (implicitly re-runs on code changes):

```sh
$ npm test
```

## Release

### Build

Generate a production release in the `build` directory:

```sh
$ npm run build
```
