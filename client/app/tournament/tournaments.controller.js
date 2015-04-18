'use strict';

angular.module('kikombeApp')
.controller('TournamentsCtrl', function ($scope, socket, $location, Tournament, tournaments) {
	$scope.tournaments = tournaments;
	socket.syncUpdates('tournament', $scope.tournaments);
	$scope.tournament = new Tournament();

	$scope.addTournament = function() {
		$scope.tournament.$save();
		$scope.tournament = new Tournament();
	};

	$scope.active = function(tournament){
		var start = Date.parse(tournament.start);
		var end = Date.parse(tournament.end);
		return start < Date.now() && Date.now() <= end;
	};
	$scope.go = function(tournament) {
		$location.path('tournaments/' + tournament);
	};
	$scope.$on('$destroy', function () {
		socket.unsyncUpdates('tournament');
	});
});
