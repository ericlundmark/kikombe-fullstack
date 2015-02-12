'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var tournament = {
	name:"VM",
	start: new Date(),
	end: new Date()
};
describe('GET /api/tournaments', function() {

	it('should respond with JSON array', function(done) {
		request(app)
		.get('/api/tournaments')
		.expect(200)
		.expect('Content-Type', /json/)
		.end(function(err, res) {
			if (err) return done(err);
			res.body.should.be.instanceof(Array);
			done();
		});
	});
});
describe('POST /api/tournaments', function() {

	it('should add a new tournament and respond with 201', function(done) {
		request(app)
		.post('/api/tournaments')
		.send(tournament)
		.expect(201)
		.expect('Content-Type', /json/)
		.end(function(err, res) {
			if (err) return done(err);
			res.should.have.status(201);
			res.body.should.have.property('_id');
			res.body.name.should.equal(tournament.name);
			res.body.start.should.equal(tournament.start.toISOString());                    
			res.body.end.should.equal(tournament.end.toISOString());
			res.body.groups.should.have.length(0);
			done();
		});
	});
});
