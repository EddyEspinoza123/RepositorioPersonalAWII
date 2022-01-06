const { model, Schema } = require('mongoose');

const PostSchema = Schema(
    {
        "title":{
            type: String,
            require: [ true, "El titulo del articulo o post es requerido" ] 
        },
        "type_post": {
            type: String,
            require: [ true, "Indique el tipo de publicación" ] 
        },
        "privacity": {
            type: String
        },
        "description":{
            type: String,
            require: [ true, "Es necesario agregar una descripcion a la publicacion" ] 
        },
        "date":{},
        // "date":new Date(2022,0,4),
        // los meses se contabilizan desde el 0 hasta el 11 (0=enero: 11=diciembre)
        "image_url":{
            type: String
        },

        // "author":
    }
);

module.exports = model('Post', PostSchema);