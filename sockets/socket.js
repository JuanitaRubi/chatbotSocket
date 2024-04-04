//permite las interacciones
const Usuario=require("../modelos/usuario");
const Producto= require("../modelos/producto");

function socket(io){
    io.on("connection", (socket)=>{
        //MOSTRAR USUAROS
        mostrarUsuarios();
        async function mostrarUsuarios(){
           const usuarios= await Usuario.find();
           io.emit("servidorEnviarUsuarios", usuarios);
        }

        //GUARDAR USUARIO
        socket.on("ClienteGuardarUsuario", async(usuario)=>{
            //console.log("Estas en guardar");
            try{
                if(usuario.id==""){
                    await new Usuario(usuario).save();
                    io.emit("servidorUsuarioGuardado", "Usuario guardado");
                }
                else{
                    await Usuario.findByIdAndUpdate(usuario.id, usuario);
                    io.emit("servidorUsuarioGuardado","Usuario modificado");
                }
                mostrarUsuarios();
                    
            }
            catch(err){
                console.log("Error al registrar usuario"+err);
            } 
        });

        //MOSTRAR PRODUCTOS MONGO
        mostrarProductos();
        async function mostrarProductos(){
            const productos = await Producto.find()
            io.emit("servidorEnviarProductos", productos);
        }

        //GUARDAR PRODUCTO
        socket.on("clienteGuardarProducto",async(producto)=>{
            try {
                if(producto.id==""){
                    await new Producto(producto).save();
                    io.emit("servidorProductoGuardado", "Producto guardado");
                }
                else{
                    await Producto.findByIdAndUpdate(producto.id, producto);
                    io.emit("servidorProductoGuardado","Producto modificado");
                }
                mostrarProductos();
                }
                catch (err){
                console.log("Error al guardar producto" + err);
            }
        });

        //OBTENER USUARIO POR ID
        socket.on("clienteObtenerUsuarioPorID", async(id)=>{
        const usuario= await Usuario.findById(id);
        io.emit("servidorObtenerUsuarioPorID", usuario);
        });

        //BORRAR USUARIO POR ID
        socket.on("clienteBorrarUsuario", async(id)=>{
            await Usuario.findByIdAndDelete(id);
            io.emit("servidorUsuarioGuardado", "Usuario borrado");
            mostrarUsuarios();
        });

        //OBTENER PRODUCTO POR ID
        socket.on("cleinteObtenerProductoPorID", async(id)=>{
            const producto= await Producto.findById(id);
            io.emit("servidorObetenerProductoPorID", producto);
        });


        //BORRAR PRODUCTO POR ID
        socket.on("clienteBorrarProducto", async(id)=>{
            await Producto.findByIdAndDelete(id);
            io.emit("servidorProductoGuardado", "Producto borrado");
            mostrarProductos();
        });

    
    }) //FIN IO.ON
};
module.exports=socket;