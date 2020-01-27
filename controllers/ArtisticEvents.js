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

module.exports.getSameDayEvents = function getSameDayEvents (req, res, next) {
  var artisticEventId = req.swagger.params['artisticEventId'].value;
  ArtisticEvents.getSameDayEvents(artisticEventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLinkedSeminarsByEvent = function getLinkedSeminarsByEvent (req, res, next) {
  var artisticEventId = req.swagger.params['artisticEventId'].value;
  ArtisticEvents.getLinkedSeminarsByEvent(artisticEventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLinkedPerformersByEvent = function getLinkedPerformersByEvent (req, res, next) {
  var artisticEventId = req.swagger.params['artisticEventId'].value;
  ArtisticEvents.getLinkedPerformersByEvent(artisticEventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
