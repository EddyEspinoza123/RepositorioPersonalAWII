const mongoose = require('mongoose');
const conexion = `mongodb+srv://alberto:eddybsc123@cluster0.gdjrq.mongodb.net/practica?retryWrites=true&w=majority`;


(async ()=>{
  await mongoose.connect(conexion,  { useNewUrlParser:true, useUnifiedTopology:true });
  const Usuario =  mongoose.model("Usuario", { nombre:String });
  const usuario1 = new Usuario({nombre:"Evelyn Valdez"});
  const guardo = await usuario1.save();
  const respuesta = await Usuario.find();
  console.log(respuesta);
})();

