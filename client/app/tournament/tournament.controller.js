'use strict';

angular.module('kikombeApp')
.controller('TournamentCtrl', function ($scope, socket, $location, tournament, $stateParams) {
	$scope.tournament = tournament;
	$scope.active = function(tournament){
		var start = Date.parse(tournament.start);
		var end = Date.parse(tournament.end);
		return start < Date.now() && Date.now() <= end;
	};
	$scope.newGroup = '';
	$scope.addGroup = function(){
		$scope.tournament.groups.push({
			name: $scope.newGroup
		});
		$scope.tournament.$update(function(){
			$scope.newGroup = '';
		});
	};
	$scope.go = function(group) {
		$location.path('tournaments/' + $scope.tournament._id + '/group/' + group);
	};
	$scope.$on('$destroy', function () {
		socket.unsyncUpdates('tournament');
	});
});
