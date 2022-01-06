const { model, Schema } = require('mongoose');

const AdvertSchema = Schema(
    {
        "date":{},
        "advert": {
            type: String,
            require: [ true, "EL mensaje es obligatorio" ] 
        },

        // "id_comunity": {}
        // "id_user": {}
    }
);

module.exports = model('Advert', AdvertSchema);