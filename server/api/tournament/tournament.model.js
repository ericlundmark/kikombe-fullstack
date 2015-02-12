'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var TournamentSchema = new Schema({
	name: {type: String, required: true},
	start: {type: Date, required: true},
	end: {type: Date, required: true},
	groups: [{
		name: {type: String, required: true},
		teams:[{type:String, null: true}],
		games:[{type: Schema.Types.ObjectId, ref: 'Game', null: true}]
	}]
});

TournamentSchema.set('versionKey', false);
module.exports = mongoose.model('Tournament', TournamentSchema);
