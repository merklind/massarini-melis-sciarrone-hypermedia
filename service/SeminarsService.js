'use strict';
var db = require('../utils/database');
var respondWithCode= require('../utils/writer').respondWithCode;

/**
 * Finds all the seminars
 *
 * returns List
 **/
exports.getSeminars = function() {
  return db('seminar')
  .orderBy('date','asc')
  .select();
}

/**
 * Find seminar by ID
 * Returns a single seminar
 *
 * seminarId Long ID of seminar to return
 * returns Seminar
 **/
exports.getSeminarById = function(seminarId) {
  if(!seminarId)
    return respondWithCode(400, {message: 'invalidId'})

  return db('seminar').where({'seminar.id': seminarId})
  .then(function(seminars){
    if(seminars.length == 1){
      return seminars[0];
    }
    else {
      return respondWithCode(404,{message: 'seminar not found'})
    }
  })
}

/**
 * Finds all the events correlated to one seminar
 *
 * returns List
 **/
exports.getLinkedEventsBySeminar = function(seminarId) {
  if(!seminarId)
    return respondWithCode(400, {message: 'invalidId'})

  return db('eventSeminar').where({'eventSeminar.seminarId': seminarId})
  .join('artisticEvent', 'artisticEvent.id', '=', 'eventSeminar.eventId')
  .select('artisticEvent.*')
}

