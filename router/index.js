const express = require("express");
const app = express();

app.get('/pokemon', require('./pokemonController'));

module.exports = app;
