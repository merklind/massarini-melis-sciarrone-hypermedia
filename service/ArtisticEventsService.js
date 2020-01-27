'use strict';
var db = require('../utils/database');
var respondWithCode= require('../utils/writer').respondWithCode;

/**
 * Finds all the artistic events
 *
 * returns List
 **/
exports.getArtisticEvents = function() {
  return db('artisticEvent').select();
}

/**
 * Find event by ID
 * Returns a single event
 *
 * artisticEventId Long ID of the event to return
 * returns ArtisticEvent
 **/
exports.getEventById = function(artisticEventId) {
  if(!artisticEventId)
    return respondWithCode(400, {message: 'invalidId'})

  return db('artisticEvent').where({'artisticEvent.id': artisticEventId})
  .then(function(artisticEvents){
    if(artisticEvents.length == 1){
      return artisticEvents[0];
    }
    else {
      return respondWithCode(404,{message: 'artisticEvent not found'})
    }
  })
}

/**
 * Finds all the artistic events of the same day
 *
 * returns List
 **/
exports.getSameDayEvents = function(artisticEventId) {
  if(!artisticEventId)
    return respondWithCode(400, {message: 'invalidId'})

  return db('artisticEvent').where({'artisticEvent.id': artisticEventId})
  .then(function(artisticEvents){
    if(artisticEvents.length == 1){
      var eventDate = artisticEvents[0].date;
      var eventId = artisticEvents[0].id;
      return db('artisticEvent')
        .where({'artisticEvent.date': eventDate})
        .whereNot({'artisticEvent.id': eventId})

    } else {
      throw new Error('artisticEvent not found')
    }
  })
  .then(function(artisticEvents) {
    return artisticEvents;
  })
  .catch(function (err){
    return respondWithCode(404,{message: err.message});
  })
}

/**
 * Finds all the seminars correlated to one event
 *
 * returns List
 **/
exports.getLinkedSeminarsByEvent = function(artisticEventId) {
  
}

/**
 * Finds all the performers correlated to one event
 *
 * returns List
 **/
exports.getLinkedPerformersByEvent = function(artisticEventId) {

}

