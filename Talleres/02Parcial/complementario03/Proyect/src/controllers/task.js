const {response} = require('express');
const { Task } = require('../models/');

const GetTask = async (req, res = response) => {

    const respuesta = await Task.find();

    return res.status(200).json(respuesta);
}


module.exports={
    GetTask,
}