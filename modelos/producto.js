const { mongoose } = require("mongoose");

const producSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true,
    },
    descripcion: {
        type: String,
        require: true,
    },
    cantidad: {
        type:Number,
        require: true,
    },
    estatus: {
        type: Boolean,
        default: true,
    },
});
module.exports = new mongoose.model("producto", producSchema);