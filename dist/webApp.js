(function() {
  var app, bodyParser, cookieParser, express, http, logger, path, routes, server, sh;

  http = require('http');

  express = require('express');

  path = require('path');

  bodyParser = require('body-parser');

  logger = require('morgan');

  cookieParser = require('cookie-parser');

  sh = require('./lib/www.js');

  routes = require('./routes');

  app = express();

  app.set('views', path.join(__dirname, 'views'));

  app.set('view engine', 'jade');

  app.use(logger('dev'));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(cookieParser());

  app.use(express["static"](path.join(__dirname, 'public')));

  app.use('/', routes);

  app.set('port', sh.setPort());

  console.log(app.get('port'));

  server = http.createServer(app);

  server.listen(app.get('port'));

  server.on('listening', function() {
    return console.log('server ready for connections on port 3000');
  });

  server.on('error', sh.onError);

  module.exports = app;

}).call(this);
