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
        socket.on("clienteGuardarUsuario", async(usuario)=>{

            try{
                await new Usuario(usuario).save();
                io.emit("servidorUsuarioGuardado", "Usuario guardado");
                console.log("usuario guardado");
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
                await new Producto(producto).save();
                io.emit("servidorProductoGuardado", "Producto guardado");
                console.log("producto guardado");
            }catch (err){
                console.log("Error al guardar producto" + err);
            }
        });
        




    
    }) //FIN IO.ON
    };
module.exports=socket;