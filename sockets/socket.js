//permite las interacciones
function socket(io){
    io.on("connection", (socket)=>{
      socket.on("pregunta", (pregunta)=>{
        var respuesta=contestarPregunta(pregunta);
        socket.emit("respuesta", respuesta);
    });
  });
}

function contestarPregunta(pregunta){
  switch(pregunta){
    case "1":
      return "El administrador de redes se encarga de planificar, implementar, mantener y optimizar la infraestructura de red para garantizar la conectividad y la eficiencia de los sistemas.";
    
    case "2":
      return "Las copias de seguridad aseguran la recuperación de datos en caso de fallos o pérdidas, protegiendo la integridad y disponibilidad de la información en la red.";

    case "3":
      return "Filtra tráfico no autorizado.";

    case "4":
      return "Calidad de Servicio. Se refiere a priorizar y gestionar tráfico para un mejor rendimiento de servicios importantes.";

    case "5":
      return" Usa cifrado, cambia contraseñas y desactiva servicios innecesarios.";
  }
}


  //     console.log(socket.id);
  //     io.emit("saludo","Hola soy el servidor")
  //     socket.on("Respuesta", (Respuesta)=>{
  //         console.log("Recibi tu respuesta"+Respuesta);
  //         socket.on("nombre", (nombre)=>{
  //           var saludo="Hola"+nombre;
  //           io.to(socket.id).emit("saludo", saludo);
  //         });

  //                    
  //         });
  //       });

  //       console.log("Recibiendo datos...");
  //       console.log(socket);
  //   }
  // )}
module.exports=socket;