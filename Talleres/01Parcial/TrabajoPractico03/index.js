const axios    = require('axios').default;
const cheerio  = require('cheerio');
const mongoose = require('mongoose');
const cron     = require('node-cron');

const {MONGO_URI} = require("./config");
const {Noticias} = require("./models");

mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true});

cron.schedule("* * * * * *",//se ejecutara todos los dias
async () => {
console.log("Ejecutado correctamente!");
const html = await axios.get("https://cnnespanol.cnn.com/"); //para traer la informacion de todo el html
const $ = cheerio.load(html.data);
const titles = $(".news__title");
titles.each((index, element) => {
  const noticia = {
    titulo: $(element)
    .text()
    .toString(),
    enlace: $(element)
    .children()
    .attr("href")
  };
  Noticias.create([noticia]);
})
})