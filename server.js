const express = require("express"); // import express
// const router = require('') // import router
const server = express(); // initialize server
const helmet = require("helmet");

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => res.status(200).send('<h2>Server is up and running</h2>'))

module.exports = server;