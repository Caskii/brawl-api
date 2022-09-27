'use strict';

var mongoose = require('mongoose'),
  Server = mongoose.model('Server');
 
  exports.server_list = async (req, res) => {
    res.send(await Server.find());
  };

  exports.server_detail = async (req, res) => {
    res.send(await Server.findById(req.params.id));
  };