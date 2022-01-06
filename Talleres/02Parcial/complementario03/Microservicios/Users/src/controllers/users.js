const {response} = require('express');
const { Users } = require('../models/');

const GetUsers = async (req, res = response) => {

    const respuesta = await Users.find();

    return res.status(200).json(respuesta);
}

module.exports={
    GetUsers
}