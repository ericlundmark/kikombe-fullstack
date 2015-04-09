'use strict';

angular.module('kikombeApp')
.controller('TournamentsCtrl', function ($scope, $http, $modal, $location, socket, Tournaments) {
	$scope.tournaments = Tournaments.query({}, function(){
      socket.syncUpdates('tournament', $scope.tournaments);
	});
	$scope.tournament = {};

	$scope.addTournament = function() {
		var newTournament = $scope.tournament;
		var user = Tournaments.save(newTournament, function() {
		});
		$scope.tournament = {};
	};

	$scope.active = function(tournament){
		var start = Date.parse(tournament.start);
		var end = Date.parse(tournament.end);
		return start < Date.now() && Date.now() <= end;
	};
	$scope.format = function(date){
		return this.date;
	};
	$scope.go = function(tournament) {
		$location.path('tournaments/' + tournament);
	};
	$scope.$on('$destroy', function () {
		socket.unsyncUpdates('tournament');
	});
});
