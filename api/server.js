const express = require('express')
const cors = require("cors")
const carsRouter = require('./cars/carsRouter')
const authRouter = require('./auth/authRouter')
const server = express();
require('dotenv').config()

server.use(express.json());
server.use(cors())

server.use('/api/cars',carsRouter)
server.use('/api/auth',authRouter)

server.get('/', (req,res) => {
    res.json({message: "inside server"})
})
server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server