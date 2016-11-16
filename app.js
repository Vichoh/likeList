var port 				= process.env.PORT || 8000,
	express 			= require('express'),
	app 				= express(),
	io					= require('socket.io').
								listen(
									app.listen(port, function(){
										console.log('listening on *:8000');
									})
								);

require('./config')(app);
require('./routes')(app);
require('./events')(io);
