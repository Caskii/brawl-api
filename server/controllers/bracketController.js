'use strict';

var mongoose = require('mongoose'),
Bracket = mongoose.model('Bracket'); 

exports.bracket_detail = async (req, res) => {
  res.send(await Bracket.findById(req.params.id));
};
exports.bracket_update= async (req, res) => {
  Bracket.findByIdAndUpdate(req.params.id,{ $set: { bracket: req.body.bracket }}, { new: true }, function (err,bracket) {
    if (err) throw err;
    if (!bracket) {
      return res.status(404).json({ message: "bracket doesn't exist" });
    }
    res.redirect("/brackets/"+bracket._id);
  });
};