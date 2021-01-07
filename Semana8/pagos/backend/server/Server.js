const express = require('express');
const bodyParser = require('body-parser');
const mainRouter = require('../routes/main');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/v1/', mainRouter);

module.exports = {app, PORT};