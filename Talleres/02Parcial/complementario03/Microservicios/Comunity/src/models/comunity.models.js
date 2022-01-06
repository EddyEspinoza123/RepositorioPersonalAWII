const { model, Schema } = require('mongoose');

const ComunitySchema = Schema(
    {
        "name": { 
            type: String, 
            require: [ true, "El Nombre es Requerido" ] 
        },
        "image_comunity": {
            type: String
        },

        "id_admins": [String],
        
        "description": {
            type: String
        },
        "mision":{
            type: String
        },
        "vision":{
            type: String
        },
        "area": {
            type: String,
            require: [ true, "El Area es Requerido" ] 
        },
        "contacto":{
            "email": {
                type: String,
                require: [true, "El email es requerido"]
            },
            "social_media": {
                "facebook": String,
                "instagram": String,
            }
            
        }
    }
);

module.exports = model('Comunity', ComunitySchema);