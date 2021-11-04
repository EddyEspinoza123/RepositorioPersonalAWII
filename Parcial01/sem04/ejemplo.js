const mongoose = require('mongoose');
const conexion = `mongodb+srv://alberto:eddybsc123@cluster0.gdjrq.mongodb.net/practica?retryWrites=true&w=majority`;




mongoose.connect(conexion,  { useNewUrlParser:true, useUnifiedTopology:true });

const Usuario =  mongoose.model("Usuario", { nombre:String });
const usuario1 = new Usuario({nombre:"Evelyn Valdez"});

usuario1.save();
Usuario.find().then(console.log)