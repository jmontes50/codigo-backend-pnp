const express = require('express');
const bodyParser = require('body-parser');
const mainRouter = require('../routes/main');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/v1/', mainRouter);

module.exports = {app, PORT};