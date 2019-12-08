'use strict';

var utils = require('../utils/writer.js');
var Main = require('../service/MainService');

module.exports.indexGET = function indexGET (req, res, next) {
  Main.indexGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
