(function() {
  var sh;

  sh = {};


  /**
  *@var port 
  *@desc port setting for application -> modify here. useful for AWS
   */

  sh.port = 3000;

  sh.setPort = function() {
    var port;
    port = process.env.port || sh.port;
    return sh.normalizePort(port);
  };

  sh.normalizePort = function(val) {
    var port;
    port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };

  sh.onError = function(error) {
    var bind, ref;
    if (error.syscall !== 'listen') {
      throw error;
    }
    bind = (ref = typeof port === 'string') != null ? ref : 'Pipe ' + {
      port: 'Port ' + port
    };
    switch (error.code) {
      case 'EACCES':
        return sh.eaccessHandler;
      case 'EADDRINUSE':
        return sh.eaddrinuseHandler;
      default:
        throw error;
    }
  };

  sh.eaccessHandler = function() {
    return console.log('port not accessible -> are you root?');
  };

  sh.eaddrinuseHandler = function() {
    return console.log('address in use. terminate other instances of node and retry. app fails.');
  };

  sh.onListening = function() {
    var addr, bind, ref;
    addr = this.address();
    bind = (ref = typeof addr === 'string') != null ? ref : 'pipe ' + {
      addr: 'port ' + addr.port
    };
    return debug('Listening on ' + bind);
  };

  module.exports = sh;

}).call(this);
