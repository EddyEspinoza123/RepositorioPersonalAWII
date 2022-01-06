const {response} = require('express');
const { Post } = require('../models/');

const GetPost = async (req, res = response) => {

    const respuesta = await Post.find();

    return res.status(200).json(respuesta);
}


const GetPostByType = async (req, res = response) => {
    const { type_post } = req.params;

    let filther = { type_post };

    const respuesta = await Post.find(filther);

    return res.status(200).json(respuesta);
}



module.exports={
    GetPost,   
    GetPostByType
}