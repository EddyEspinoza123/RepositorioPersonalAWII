const express = require('express');
const cors = require('cors');

const { DBConection } = require('./database');

class Server
{
    constructor(){
        this.app = express();
        this.port = process.env.PORT_DEV;

        this.conectDB();
        this.middleware();
        this.routes();
    }

    async conectDB(){
        await DBConection();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api/v2/task', require('./routes/task.routes') );
        this.app.use('/api/v2/advert', require('./routes/advert.routes'))        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`This server is running in http://localhost:${this.port}`);
        })
    }

}

module.exports = Server;