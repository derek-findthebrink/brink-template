sh = {}

###*
*@var port 
*@desc port setting for application -> modify here. useful for AWS
###
sh.port = 3000

sh.setPort = ()->
	port = process.env.port || sh.port
	return sh.normalizePort(port)

sh.normalizePort = (val)->
	port = parseInt(val, 10)
	if (isNaN(port))
		return val
	if (port >= 0)
		return port
	return false

sh.onError = (error)->
	if (error.syscall != 'listen')
		throw error
	bind = typeof port == 'string' ? 'Pipe ' + port : 'Port ' + port
	switch error.code
		when 'EACCES' then sh.eaccessHandler
		when 'EADDRINUSE' then sh.eaddrinuseHandler
		else throw error

sh.eaccessHandler = ()->
	console.log('port not accessible -> are you root?')

sh.eaddrinuseHandler = ()->
	console.log('address in use. terminate other instances of node and retry. app fails.')

# not in use
sh.onListening = ()->
	addr = this.address()
	bind = typeof addr == 'string' ? 'pipe ' + addr : 'port ' + addr.port
	debug('Listening on ' + bind)

module.exports = sh