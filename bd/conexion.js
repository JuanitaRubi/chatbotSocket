const mongoose=require("mongoose");
require("dotenv").config();
const mongodb_password=process.env.MONGO_ATLAS;  //pw en el codigo del prof es password
async function conectarMongo(){
    const mongoDB=mongodb_password;
    mongoose.set("strictQuery",true);
    try{
        await mongoose.connect(mongoDB, {});
        console.log("Conectado a mongoDB");
    }
        catch(err){
            console.log("Error en la conexion a Mongo"+err);
        }
    
}
module.exports={
    mongoose,
    conectarMongo
}