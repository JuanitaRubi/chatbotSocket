const socket = io();

var mensajeHTML=document.getElementById("mensajeHTML");
var datos=document.getElementById("datos");

//MOSTRAR PRODUCTOS DE MONGO

socket.on("servidorEnviarProductos", (productos)=>{
    var tr ="";
    productos.forEach((producto, idLocal)=>{
        tr=tr+
        `
        <tr>
            <td>${(idLocal + 1)* 100}</td>
            <td>${(producto.nombre)}</td>
            <td>${(producto.descripcion)}</td>
            <td>${(producto.cantidad)}</td>
            <td>
                <a href="#" onclick="editarproducto('${producto._id}')" class="btn btn-outline-primary">Editar</a> /
                <a href="#" onclick="borrarproducto('${producto._id}')" class="btn btn-outline-primary">Borrar</a>
            </td>
        </tr>
        `;

    });
    datos.innerHTML=tr;
});

//GUARDAD PRODUCTO EN MONGO

var enviarDatos=document.getElementById("enviarDatos");
enviarDatos.addEventListener("submit", (e)=>{
    e.preventDefault();
//RECIBE DATOS
var producto = {
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    cantidad: document.getElementById("cantidad").value,
};
socket.emit("clienteGuardarProducto", producto);
socket.on("servidorProductoGuardado", (mensaje)=>{
    console.log(mensaje);
    mensajeHTML.innerHTML=mensaje;
    setTimeout(()=>{
        mensajeHTML.innerHTML="";
    }, 3000);
});
console.log("Recibiendo datos... ");

    document.getElementById("nombre").value="";
    document.getElementById("descripcion").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("nombre").focus();
    


});


//MODIFICAR PRODUCTO MONGO

function editarproducto(id){
    console.log(id);
}

//BORRAR PRODUCTO MONGO

function borrarproducto(id){
    console.log(id);
}