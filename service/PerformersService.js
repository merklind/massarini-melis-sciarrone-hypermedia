'use strict';


/**
 * Find performer by ID
 * Returns a single performer
 *
 * performerId Long ID of performer to return
 * returns Performer
 **/
exports.getPerformerById = function(performerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "description" : "description",
  "performerId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds all performers
 *
 * returns List
 **/
exports.getPerformers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "description" : "description",
  "performerId" : 0
}, {
  "name" : "name",
  "description" : "description",
  "performerId" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

