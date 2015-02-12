'use strict';

var _ = require('lodash');
var Cup = require('./cup.model');

// Get list of cups
exports.index = function(req, res) {
  Cup.find(function (err, cups) {
    if(err) { return handleError(res, err); }
    return res.json(200, cups);
  });
};

// Get a single cup
exports.show = function(req, res) {
  Cup.findById(req.params.id, function (err, cup) {
    if(err) { return handleError(res, err); }
    if(!cup) { return res.send(404); }
    return res.json(cup);
  });
};

// Creates a new cup in the DB.
exports.create = function(req, res) {
  Cup.create(req.body, function(err, cup) {
    if(err) { return handleError(res, err); }
    return res.json(201, cup);
  });
};

// Updates an existing cup in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cup.findById(req.params.id, function (err, cup) {
    if (err) { return handleError(res, err); }
    if(!cup) { return res.send(404); }
    var updated = _.merge(cup, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cup);
    });
  });
};

// Deletes a cup from the DB.
exports.destroy = function(req, res) {
  Cup.findById(req.params.id, function (err, cup) {
    if(err) { return handleError(res, err); }
    if(!cup) { return res.send(404); }
    cup.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}