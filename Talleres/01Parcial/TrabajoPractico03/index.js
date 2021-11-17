const mongoose = require('mongoose');
const cheerio  = require('cheerio');
const cron     = require('node-cron');
const axios    = require('axios').default;

const {MONGO_URI} = require("./config");
const {Noticias} = require("./models");

mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true});

cron.schedule("* * * * * *",//se ejecutara todos los dias
async () => {
console.log("Ejecutado correctamente!");
const html = await axios.get("https://www.elcomercio.com/"); //link donde se extraera la informacion
const $ = cheerio.load(html.data);
const titles = $(".article-highlighted__title");
    
    let arraynew=[];
    titles.each((index, element)=>{
        const Noticia ={
            titulo: $(element).text().toString(),
            enlace: $(element).attr("href")
        }
        arraynew= [...arraynew, Noticia];
    })
//guardaremos en la Base de Datos en MongoAtlas
    Noticias.create(arraynew);
})

