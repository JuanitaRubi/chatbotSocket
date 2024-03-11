const socket= io();
// socket.on("saludo", (saludo)=>{
//     console.log("Estoy recibiendo tu mensaje"+saludo);
// });
// socket.emit("Respueta del cliente");
// socket.on("aaa", ()=>{
//     console.log("tu respuesta fue: aaa");
// });

// //http: //localhost:3000/socket.io/socket.io.min.js

// var enviarDatos=document.getElementById("enviarDatos");
// enviarDatos.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     var nombre=document.getElementById("nombre").value;
//     socket.emit("nombre", nombre);
//     socket.on("saludo",(saludo)=>{
//         console.log(saludo);
//         datos.innerHTML=saludo;

//     });
//     var usuario=document.getElementById("usuario").value;
//     var password=document.getElementById("password").value;
//     console.log("Recibiendo datos...");
//     console.log(nombre);
//     console.log(usuario);
//     console.log(password);
//     document.getElementById("nombre").value="";
//     document.getElementById("usuario").value="";
//     document.getElementById("password").value="";
//     document.getElementById("nombre").focus();
// });

var enviarDatos = document.getElementById("enviarDatos");
enviarDatos.addEventListener("submit", (e)=>{
    e.preventDefault();

    var pregunta=document.getElementById("pregunta").value;
    var datos=document.getElementById("datos");
    
    socket.emit("pregunta", pregunta);

    datos.innerHTML="";

    socket.on("respuesta", (respuesta)=>{
        datos.innerHTML=respuesta;
    });
});