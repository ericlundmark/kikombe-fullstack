var should = require('should');
var app = require('../../app');
var Game = require('./game.model');
var ObjectId = require('mongoose').Types.ObjectId;

var game = new Game({
	home: {
		name: "home"
	},
	away: {
		name: "away"
	},
	tournament: new ObjectId('000000000001')
});

describe('Game Model', function(){
	before(function(done) {
		Game.remove().exec().then(function() {
			done();
		});
	});

	afterEach(function(done) {
		Game.remove().exec().then(function() {
			done();
		});
	});

	it('should begin with no games', function(done){
		Game.find({}, function(err, games){
			games.should.have.length(0);
			done();
		});
	});

	it('should be possible to create a game with home and away team', function(done){
		game.save(function(err, game){
			should.exist(game);
			game.should.have.property('_id');
			game.home.name.should.equal(game.home.name);
			game.away.name.shoud.equal(game.away.name);
			game.tournament.should.equal(game.tournament);
			done();
		});
	});
});
