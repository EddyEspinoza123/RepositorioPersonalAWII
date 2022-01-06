const { model, Schema } = require('mongoose');

const UserSchema = Schema(
    {
        "names":{
            type: String,
            require: [ true, "Los nombres y apellidos son requeridos" ] 
        },
        "user": {
            type: String,
            require: [ true, "El usuario es requerido" ] 
        },
        "email": {
            type: String,
            require: [ true, "El correo es requerido" ] 
        },
        "password": {
            type: String,
            require: [ true, "La contraseña es requerida" ] 
        },

        // "id_comunity": {}
    }
);

module.exports = model('Users', UserSchema);