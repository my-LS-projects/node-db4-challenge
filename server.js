const express = require("express"); // import express
// const router = require('') // import router
const server = express(); // initialize server
const helmet = require("helmet");

server.use(helmet());
server.use(express.json());

module.exports = server;
