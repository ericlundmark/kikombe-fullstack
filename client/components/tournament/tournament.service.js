'use strict';

angular.module('kikombeApp')
.factory('Tournament',['$resource', function($resource) {
	return $resource('/api/tournaments/:_id', {_id: '@_id'}, {
		'update': {
			method: 'PUT',
			params: {_id: '@_id'}
		}
	});
}]);
