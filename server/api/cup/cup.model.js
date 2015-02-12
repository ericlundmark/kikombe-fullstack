'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CupSchema = new Schema({
	name: {type: String, required: true},
	tournament: {type: Schema.Types.ObjectId, ref: 'Tournament', required: true},
	members: [{type: Schema.Types.ObjectId, ref: 'User', null:true}],
	predictions: [{
		game: {type: Schema.Types.ObjectId, ref: 'Game', null:true},
		home: Number,
		away: Number,
		user: {type: Schema.Types.ObjectId, ref: 'User', null:true}
	}],
	owner: {type: Schema.Types.ObjectId, ref: 'User', required: true}
});

CupSchema.set('versionKey', false);
module.exports = mongoose.model('Cup', CupSchema);
