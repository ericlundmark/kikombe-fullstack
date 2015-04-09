'use strict';

angular.module('kikombeApp')
.factory('Tournaments',['$resource', function($resource) {
	return $resource('/api/tournaments/:_id', null, {
		'update': {
			method: 'PUT',
			params: {_id: '@_id'}
		}
	});
}]);
