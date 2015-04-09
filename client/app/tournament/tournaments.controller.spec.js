'use strict';

describe('Controller: TournamentCtrl', function () {

  // load the controller's module
  beforeEach(module('kikombeAngularApp'));

  var TournamentCtrl, scope, backend;

  beforeEach(angular.mock.inject(function ($httpBackend) {
	  backend = $httpBackend;
	  backend.expect("GET", "productData.json").respond(
		  [{ _id:"1" "name": "VM", start: Date.now(), end: Date.now(), groups: []}]);
  }));
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
	  scope = $rootScope.$new();
	  TournamentCtrl = $controller('TournamentCtrl', {
		  $scope: scope
	  });
  }));

  it('should ...', function () {
	  expect(1).toEqual(1);
  });
});
