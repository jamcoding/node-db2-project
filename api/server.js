const express = require('express');
const helmet = require('helmet');

const carRouter = require('../cars/carsRouter.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/cars', carRouter);

server.get('/', (req, res) => {
    res.send('<h2>API is up</h2>');
})

module.exports = server;