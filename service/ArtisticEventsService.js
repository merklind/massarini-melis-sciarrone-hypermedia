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

