//Cliente
var socket = io();
var suma=0;

$(document).keypress(function(e) {
    console.log("hola");
    if(e.which == 13) {
      var agregar = $("input[name=mensaje]").val();
      if(agregar.length>0){
        socket.emit('envioServidor', agregar);//emito un evento cuando hace click
        $("input").val("");
        return false;
      }
    }

});

socket.on('recibirServidor', function (data) {
	//$('#messages').append('<li> '+data+'</li>');

      var agregar = data;
      if(agregar.length>0){
        if(suma==0){
          suma+=10;
        }else{
        var elemento = $("p:last-child");
        var posicion = elemento.height();
        suma+=posicion+30;
      }
      if(($("#chat").scrollTop() + $("#chat").height()) == $('#chat')[0].scrollHeight) {
        $("#mensajes").append("<p>"+agregar+"</p>");
        $("p:last-child").animate({bottom:"-="+suma+"px"},0);
        $("#chat").animate({ scrollTop: $('#chat')[0].scrollHeight}, 1000);
    }else{
      $("#mensajes").append("<p>"+agregar+"</p>");

      $("p:last-child").animate({bottom:"-="+suma+"px"},0);
    }
      $("input").val("");
  }
    
});

var bandera= true;
$(document).ready(function(){
  
  $("#mas").click(function(){
    
    $(".barlat").toggleClass('hideBar');
    
    $(".barTop").toggleClass('col-md-9','col-md-12');
    $(".contenido").toggleClass('col-md-9','col-md-12');
    $(".barBotm").toggleClass('col-md-9','col-md-12');

    
  });
});