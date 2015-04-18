'use strict';

angular.module('kikombeApp')
.factory('Game',['$resource', function($resource) {
	return $resource('/api/games/:_id', {_id: '@_id'}, {
		'update': {
			method: 'PUT',
			params: {_id: '@_id'}
		}
	});
}]);
