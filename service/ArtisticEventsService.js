'use strict';


/**
 * Finds all the artistic events
 *
 * returns List
 **/
exports.getArtisticEvents = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "description" : "description",
  "artisticEventId" : 0,
  "day" : "2000-01-23"
}, {
  "name" : "name",
  "description" : "description",
  "artisticEventId" : 0,
  "day" : "2000-01-23"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find event by ID
 * Returns a single event
 *
 * artisticEventId Long ID of the event to return
 * returns ArtisticEvent
 **/
exports.getEventById = function(artisticEventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "description" : "description",
  "artisticEventId" : 0,
  "day" : "2000-01-23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

