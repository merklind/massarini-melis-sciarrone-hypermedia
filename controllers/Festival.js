'use strict';

var utils = require('../utils/writer.js');
var Festival = require('../service/FestivalService');

module.exports.festival_presentationGET = function festival_presentationGET (req, res, next) {
  Festival.festival_presentationGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
