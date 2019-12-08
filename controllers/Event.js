'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.one_eventGET = function one_eventGET (req, res, next) {
  Event.one_eventGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
