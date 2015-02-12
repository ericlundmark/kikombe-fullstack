/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Cup = require('./cup.model');

exports.register = function(socket) {
  Cup.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Cup.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('cup:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('cup:remove', doc);
}