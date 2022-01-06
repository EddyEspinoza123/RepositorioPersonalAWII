const { model, Schema } = require('mongoose');

const TaskSchema = Schema(
    {
        "title":{
            type: String,
            require: [ true, "El titulo de la tarea es requerido" ] 
        },
        "description":{
            type: String,
            require: [ true, "Es necesario agregar una descripcion a la tarea" ] 
        },
        "dateOut":{},
        "status":{
            type: String
        },
    }
);

module.exports = model('Task', TaskSchema);