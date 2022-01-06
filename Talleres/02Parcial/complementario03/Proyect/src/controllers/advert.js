const {response} = require('express');
const { Advert } = require('../models/');

const GetAdvert = async (req, res = response) => {

    const respuesta = await Advert.find();

    return res.status(200).json(respuesta);
}


module.exports={
    GetAdvert,
     
}