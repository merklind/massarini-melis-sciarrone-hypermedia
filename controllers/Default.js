'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.festival_presentationGET = function festival_presentationGET (req, res, next) {
  Default.festival_presentationGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.indexGET = function indexGET (req, res, next) {
  Default.indexGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.one_eventGET = function one_eventGET (req, res, next) {
  Default.one_eventGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
