'use strict';


/**
 * Find seminar by ID
 * Returns a single seminar
 *
 * seminarId Long ID of seminar to return
 * returns Seminar
 **/
exports.getSeminarById = function(seminarId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "seminarId" : 0,
  "name" : "name",
  "description" : "description",
  "day" : "2000-01-23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds all the seminars
 *
 * returns List
 **/
exports.getSeminars = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "seminarId" : 0,
  "name" : "name",
  "description" : "description",
  "day" : "2000-01-23"
}, {
  "seminarId" : 0,
  "name" : "name",
  "description" : "description",
  "day" : "2000-01-23"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

