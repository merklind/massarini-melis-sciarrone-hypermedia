'use strict';
var db = require('../utils/database');
var respondWithCode= require('../utils/writer').respondWithCode;

/**
 * Finds all performers
 *
 * returns List
 **/
exports.getPerformers = function() {
  return db('performer')
  .orderBy('name','asc')
  .select();
}

/**
 * Find performer by ID
 * Returns a single performer
 *
 * performerId Long ID of performer to return
 * returns Performer
 **/
exports.getPerformerById = function(performerId) {
  if(!performerId)
    return new Promise(function (resolve,reject) {
      resolve(respondWithCode(400, {message: 'Invalid id'}));
    });

  return db('performer').where({'performer.id': performerId})
  .then(function(performers){
    if(performers.length == 1){
      return performers[0];
    }
    else {
      return respondWithCode(404,{message: 'performer not found'})
    }
  })
}

/**
 * Finds all events correlated to a performer
 *
 * returns List
 **/
exports.getLinkedEventsByPerformer = function(performerId) {
  if(!performerId)
    return new Promise(function (resolve,reject) {
      resolve(respondWithCode(400, {message: 'Invalid id'}));
    });

  return db('eventPerformer').where({'eventPerformer.performerId': performerId})
  .join('artisticEvent', 'artisticEvent.id', '=', 'eventPerformer.eventId')
  .select('artisticEvent.*').then(function(linkedEvents){
    if(linkedEvents.length > 0){
      return linkedEvents;
    }
    else {
      return respondWithCode(404,{message: 'linked events not found'})
    }
  })
}
