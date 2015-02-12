var should = require('should');
var app = require('../../app');
var Cup = require('./cup.model');
var ObjectId = require('mongoose').Types.ObjectId;

var cup = new Cup({
	name:"Cupen",
	tournament: new ObjectId('000000000001'),
	owner: new ObjectId('000000000001'),
	members: [new ObjectId('000000000001')]
});

describe('Cup Model', function(){
	before(function(done) {
		Cup.remove().exec().then(function() {
			done();
		});
	});

	afterEach(function(done) {
		Cup.remove().exec().then(function() {
			done();
		});
	});

	it('should begin with no cups', function(done){
		Cup.find({}, function(err, cups){
			cups.should.have.length(0);
			done();
		});
	});

	it('should be possible to create a cup with name, tournament', function(done){
		cup.save(function(err, cup){
			should.exist(cup);
			cup.should.have.property('_id');
			cup.name.should.equal(cup.name);
			cup.tournament.should.equal(cup.tournament);
			cup.members.should.have.length(1);
			cup.predictions.should.have.length(0);
			cup.owner.should.equal(cup.owner);
			done();
		});
	});

	it('should not be possible to create a cup without a name', function(done){
		cup.name = null;
		cup.save(function(err){
			should.exist(err);
			cup.name = 'cupen';
			done();
		});
	});

	it('should not be possible to create a cup without a tournament', function(done){
		cup.tournament = null;
		cup.save(function(err){
			should.exist(err);
			cup.tournament = new ObjectId('000000000001');
			done();
		});
	});
	
	it('should not be possible to create a cup without a owner', function(done){
		cup.owner = null;
		cup.save(function(err){
			should.exist(err);
			cup.owner = new ObjectId('000000000001');
			done();
		});
	});

	it('should not be possible to have duplicate members', function(done){
		cup.members.push(new ObjectId('000000000001'));
		cup.save(function(err){
			console.log(err);
			should.exist(err);
			cup.members.splice(1, 1);
			done();
		});
	});
});
