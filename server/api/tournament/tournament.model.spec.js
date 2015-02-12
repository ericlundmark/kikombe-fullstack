var should = require('should');
var app = require('../../app');
var Tournament = require('./tournament.model');

var tournament = new Tournament({
	name:"VM",
	start: new Date(),
	end: new Date(),
	groups: []
});

describe('Tournament Model', function(){
	before(function(done) {
		// Clear users before testing
		Tournament.remove().exec().then(function() {
			done();
		});
	});

	afterEach(function(done) {
		Tournament.remove().exec().then(function() {
			done();
		});
	});

	it('should begin with no tournaments', function(done){
		Tournament.find({}, function(err, tournaments){
			tournaments.should.have.length(0);
			done();
		});
	});
  
	it('should be able to add a tournament', function(done){
		tournament.save(function(err, t){
			should.exist(t);
			t.should.have.property('id');
			t.name.should.equal(tournament.name);
			t.start.should.equal(tournament.start);
			t.end.should.equal(tournament.end);
			t.groups.should.have.length(0);
			done();
		});
	});

	it('should fail when saving without a name', function(done) {
		tournament.name = '';
		tournament.save(function(err) {
			should.exist(err);
			tournament.name = 'VM';
			done();
		});
	});
	it('should fail when saving without a start date', function(done){
		tournament.start='';
		tournament.save(function(err){
			should.exist(err);
			tournament.start = new Date();
			done();
		});
	});
	it('should fail when saving without an end date', function(done){
		tournament.end='';
		tournament.save(function(err){
			should.exist(err);
			tournament.end = new Date();
			done();
		});
	});
	it('should accept a group with a name', function(done){
		var group = {
			name: "Name"
		};
		tournament.groups.push(group);
		tournament.save(function(err, tournament){
			should.not.exist(err);
			tournament.groups.should.have.length(1);
			tournament.groups[0].teams.should.have.length(0);
			tournament.groups[0].games.should.have.length(0);
			done();
		});
	});
	it('should not accept a group without a name', function(done){
		var group = {};
		tournament.groups.push(group);
		tournament.save(function(err, tournament){
			should.exist(err);
			done();
		});
	});
});
