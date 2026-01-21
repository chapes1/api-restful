const { Router } = require("express");
const app = Router();

app.use("/pokemon", require('./pokemon.js'));
app.use("/type", require('./type.js'));
app.use("/region", require('./region.js'));

module.exports = app;
