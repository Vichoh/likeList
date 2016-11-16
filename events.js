//server
module.exports=function(io){
	
	io.sockets.on('connection', function(socket) {
		
		console.log('Bienvenido');

		socket.on('envioServidor', function(texto){//escuchar evento cuando presiono el boton
			
			io.sockets.emit('recibirServidor', texto);
			
		});
	});
};