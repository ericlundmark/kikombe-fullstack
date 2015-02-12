/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Tournament = require('./tournament.model');

exports.register = function(socket) {
  Tournament.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Tournament.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('tournament:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('tournament:remove', doc);
}