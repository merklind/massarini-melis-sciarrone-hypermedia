'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.registerUser = function registerUser (req, res, next) {
  var userData = req.swagger.params.body.value;
  Users.registerUser(userData, req)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginUser = function loginUser (req, res, next) {
  var userData = req.swagger.params.body.value;
  Users.loginUser(userData, req)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMyUser = function getMyUser (req, res, next) {
  Users.getMyUser(req)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};