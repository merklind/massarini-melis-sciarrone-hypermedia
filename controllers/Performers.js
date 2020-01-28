'use strict';

var utils = require('../utils/writer.js');
var Performers = require('../service/PerformersService');

module.exports.getPerformerById = function getPerformerById (req, res, next) {
  var performerId = req.swagger.params['performerId'].value;
  Performers.getPerformerById(performerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPerformers = function getPerformers (req, res, next) {
  Performers.getPerformers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLinkedEventsByPerformer = function getLinkedEventsByPerformer (req, res, next) {
    var performerId = req.swagger.params['performerId'].value;
  Performers.getLinkedEventsByPerformer(performerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    }); 
};
