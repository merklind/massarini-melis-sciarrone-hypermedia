'use strict';

var utils = require('../utils/writer.js');
var Seminars = require('../service/SeminarsService');

module.exports.getSeminarById = function getSeminarById (req, res, next) {
  var seminarId = req.swagger.params['seminarId'].value;
  Seminars.getSeminarById(seminarId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSeminars = function getSeminars (req, res, next) {
  Seminars.getSeminars()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
