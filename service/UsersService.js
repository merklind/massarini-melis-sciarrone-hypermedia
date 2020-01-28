'use strict';
var db = require('../utils/database');
var respondWithCode= require('../utils/writer').respondWithCode;

/**
 * Register a new user
 *
 * returns User
 **/
exports.registerUser = function(userData, req) {
  if(!userData.username || !userData.password)
    return new Promise(function (resolve,reject) {
      resolve(respondWithCode(400, {message: 'Missing username or password'}));
    });

  return db('user').where({username: userData.username})
  .then(foundUsers => {
    if (foundUsers.length > 0) {
      throw new Error('Username already in use')
    }

    return db('user').insert(userData);
  }).then(function () {
    return db('user').where(userData).select('username');
  }).then(function (newUser) {
    req.session.username = newUser.username;
    return newUser[0];
  }).catch(function (err) {
    return respondWithCode(400, {message: err.message});
  });
}

/**
 * Login a user
 *
 * returns User
 **/
exports.loginUser = function(userData, req) {
  if(!userData.username || !userData.password)
    return new Promise(function (resolve,reject) {
      resolve(respondWithCode(400, {message: 'Missing username or password'}));
    });

  return db('user').where(userData).select('username')
  .then(foundUsers => {
    if (foundUsers.length == 0) {
      return respondWithCode(401, {message: 'User not found with given credentials'});
    }

    req.session.username = foundUsers[0].username;
    return foundUsers[0];
  });
}

/**
 * Get my user
 *
 * returns User
 **/
exports.getMyUser = function(req) {
  if(!req.session || !req.session.username) {
    return new Promise(function (resolve,reject) {
      resolve(respondWithCode(401, {message: 'User not logged in.'}));
    });
  }

  return db('user').where({username: req.session.username}).select('username')
  .then(foundUsers => {
    if (foundUsers.length == 0) {
      return respondWithCode(401, {message: 'User not found'});
    }

    return foundUsers[0];
  });
}