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
    req.session.username = newUser[0].username;
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

/**
 * Get artistic events the user registered to
 *
 * returns the events
 **/
exports.getEventsReservation = function(req) {
  if(!req.session || !req.session.username) {
    return new Promise(function (resolve,reject) {
      resolve(respondWithCode(401, {message: 'User not logged in.'}));
    });
  }

  return db('userEvent').where({'userEvent.username': req.session.username})
  .join('artisticEvent', 'artisticEvent.id', '=', 'userEvent.eventId')
  .select('artisticEvent.*')
}

/**
 * Find event by ID
 * Returns a single event
 *
 * artisticEventId Long ID of the event to return
 * returns ArtisticEvent
 **/
exports.registerEvent = function(artisticEventId, req) {

  if(!req.session || !req.session.username) {
    return new Promise(function (resolve,reject) {
      resolve(respondWithCode(401, {message: 'User not logged in.'}));
    });
  }

  if(!artisticEventId)
    return new Promise(function (resolve,reject) {
      resolve(respondWithCode(400, {message: 'invalidId'}));
    });

  return db('userEvent')
  .where({'userEvent.eventId': artisticEventId ,'userEvent.username' : req.session.username})
  .then(function(artisticEvents){
    if(artisticEvents.length == 0){
      return db('userEvent').insert({username: req.session.username, eventId:artisticEventId});
    }
  }).then(function(){
    return {}
  }).catch(function (err) {
    return respondWithCode(404, {message: 'not found'});
  })
}