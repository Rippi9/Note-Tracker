
const express = require('express');
const app = express();
const note = require ('./note');
const htmlRoute = require('./html.Route');


app.use('/api', note);
app.use('/', htmlRoute);



module.exports = app;