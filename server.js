const express = require("express");
const helmet = require('helmet');
const server = express();
const recipesRouter = require('./data/recipes/recipes-router')

server.use(helmet());
server.use(express.json());

server.use('/api/recipes/', recipesRouter);

module.exports = server;