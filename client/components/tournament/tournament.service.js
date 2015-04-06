'use strict';

angular.module('kikombeApp')
.factory('Tournaments',['$resource', function($resource) {
	return $resource('/api/tournaments');
}]);
