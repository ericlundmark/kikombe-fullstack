'use strict';

describe('Service: tournament', function () {

  // load the service's module
  beforeEach(module('kikombeAngularApp'));

  // instantiate service
  var tournament;
  beforeEach(inject(function (_tournament_) {
    tournament = _tournament_;
  }));

  it('should do something', function () {
    expect(!!tournament).toBe(true);
  });

});
