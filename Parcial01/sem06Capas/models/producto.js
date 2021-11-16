const { model, Schema } = require=('mongoose');

const ProductoShema = Schema(
  {
    nombre:{
      type: String,
      required: ['El nombre del producto es necesario'],
      unique:true
    },
    estado:{
      type: Boolean,
      default: true,
      required:true
    },
    costo:{
      type: Number,
      default:0
    },
    precio:{
      type: Number,
      default:0
    },
    minimo:{
      type: Number,
      default: 0
    },

  }
);
ProductoShema.methods.toJSON = function(){
  const { __v, estado, ...data } = this.toObject();
  return data;
}

module.exports = model('Producto', ProductoShema);