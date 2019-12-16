'use strict';

var utils = require('../utils/writer.js');
var ArtisticEvents = require('../service/ArtisticEventsService');

module.exports.getArtisticEvents = function getArtisticEvents (req, res, next) {
  ArtisticEvents.getArtisticEvents()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventById = function getEventById (req, res, next) {
  var artisticEventId = req.swagger.params['artisticEventId'].value;
  ArtisticEvents.getEventById(artisticEventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
