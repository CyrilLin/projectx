#!/usr/bin/env node

const debug = require('debug')('projectx:server');
const http = require('http');
const opn = require('opn');
const SocketService = require('./sockets/service');
let normalizePort = require('./helpers/util')

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');

const routers = require('./controllers')
const middlewares = require('./middlewares')

/**
 * Create HTTP server.
 */
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'cyril lin',
  resave: false,
  saveUninitialized: true
}));

let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
app.use(routers);

// catch 404 and forward to error handler
app.use(middlewares.handler404);
// error handler
app.use(middlewares.handlerError);

const server = http.createServer(app);
//let socketService = new SocketService(server);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
//socketService.start();

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Listening on ' + bind);

  const uri = 'http://localhost:' + port
  opn(uri)
}
