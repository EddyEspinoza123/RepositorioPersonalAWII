const { model, Schema } = require('mongoose');

const CategoriaSchema = Schema(
  {
    nombre:{
      type: String,
      require: [ true, 'El nombre del producto es necesario'],
      unique:true
    },
    estado:{
      type: Boolean,
      default: true,
      require: true
    }
  }
);
module.exports = model('Categoria', CategoriaSchema);