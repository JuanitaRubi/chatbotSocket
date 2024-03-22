const socket= io();

var mensajeDiv=document.getElementById("mensaje");
var datos = document.getElementById("datos")


//MOSTRAR DATOS DE MONGODB
socket.on("servidorEnviarUsuarios", (usuarios)=>{
    var tr="";
    usuarios.forEach((usuario, idLocal)=>{
        tr=tr+
        `
        <tr>
             <td>${(idLocal+1)*100}</td>
             <td>${usuario.nombre}</td>
             <td>${usuario.usuario}</td>
             <td>${usuario.password}</td>
             <td>
                <a href="# onclick="editarUsuario('${usuario._id}')" class="btn btn-outline-primary">Editar</a> / 
                <a href="# onclick="borrarUsuario('${usuario._id}')" class="btn btn-outline-primary>Borrar</a>
             </td>
        </tr>
            `;
            
    });
    datos.innerHTML=tr;
});

//GUARDAR DATOS A MONGODB

enviarDatos.addEventListener("submit", (e)=>{
    e.preventDefault();

    //RECIBIR DATOS DEL FORMULARIO
    var usuario={ 
    nombre:document.getElementById("nombre").value,
    usuario:document.getElementById("datos").value,
    password:document.getElementById("usuario").value,

    }
    socket.emit("ClienteGuardarUsuario",usuario);
    socket.on("servidorUsuarioGuardado", (mensaje)=>{
        console.log(mensaje);
        mensajeHtml.innerHTML=mensaje;
        setTimeout(()=>{
            mensajeHtml.innerHTML="";
        },3000);
    });
    console.log("Recibiendo datos...");

        document.getElementById("nombre").value="";
        document.getElementById("usuario").value="";
        document.getElementById("password").value="";
        document.getElementById("nombre").focus();
        
    });


//MODIFICAR UN REGISTRO
function editarUsuario(id){
    console.log(id);
}

//ELIMINAR UN REGISTRO DE MONGO
function borrarUsuario(id){
    console.log(id);
}




     

//     document.getElementById("nombre").value="";
//     document.getElementById("usuario").value="";
//     document.getElementById("password").value="";
//     document.getElementById("nombre").focus();
// });

// var enviarDatos = document.getElementById("enviarDatos");
// enviarDatos.addEventListener("submit", (e)=>{
//     e.preventDefault();

//     var pregunta=document.getElementById("pregunta").value;
//     var datos=document.getElementById("datos");
    
//     socket.emit("pregunta", pregunta);

//     datos.innerHTML="";

//     socket.on("respuesta", (respuesta)=>{
//         datos.innerHTML=respuesta;
//     });
// });