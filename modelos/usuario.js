const {mongoose}= require('mongoose');

const usuarioSchema=new mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    usuario:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    }
});

module.exports= new mongoose.model("usuario",usuarioSchema);