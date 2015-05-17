'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Sellerboard = mongoose.model('Sellerboard'),
  _ = require('lodash');


exports.create = function(req, res) {
  var sellerboard = new Sellerboard(req.body);
  sellerboard.user = req.user;

  sellerboard.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the sellerboard'
      });
    }
    res.json(sellerboard);

  });
};

/**
 * List of Sellerboards
 */
exports.all = function(req, res) {
  Sellerboard.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the articles'
      });
    }
    res.json(articles);

  });
};
