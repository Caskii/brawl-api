'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,


  User = require('./models/userModel'),
  Server = require('./models/serverModel'),
  Bracket = require('./models/bracketModel'),
  
  bodyParser = require('body-parser'),
  jsonwebtoken = require("jsonwebtoken");

var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dotenv = require('dotenv').config();

const mongoose = require('mongoose');
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
};

const uri = process.env.DB_URI;
mongoose.connect(uri, option).then(function(){
    console.log("connected to mongoDB");
}, function(err) {
    console.log("error while connecting to mongoDB"+err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SALT, function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

var routes = require('./routes/routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log(' RESTful API server started on: ' + port);

module.exports = app;