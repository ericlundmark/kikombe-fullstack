/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Tournament = require('../api/tournament/tournament.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Tournament.find({}).remove(function() {
	Tournament.create({
		name: "VM 2014",
		start: new Date(2014, 6, 12, 17, 0, 0, 0),
		stop: new Date(2014, 7, 13, 24, 0, 0, 0)
	}, function() {
		console.log('finished populating tournament');
	}
	);
});

