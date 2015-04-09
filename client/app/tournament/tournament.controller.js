'use strict';

angular.module('kikombeApp')
.controller('TournamentCtrl', function ($scope, socket, Tournaments, $stateParams) {
	var id = $stateParams.tournamentid;
	$scope.tournament = Tournaments.get({_id: id}, function(tournament){
		$scope.tournament = tournament;
		socket.syncUpdates('tournament', $scope.tournament);
	});
	$scope.active = function(tournament){
		var start = Date.parse(tournament.start);
		var end = Date.parse(tournament.end);
		return start < Date.now() && Date.now() <= end;
	};
	$scope.format = function(date){
		return this.date;
	};
	$scope.newGroup = '';
	$scope.addGroup = function(){
		$scope.tournament.groups.push({
			name: $scope.newGroup,
			teams: [],
			games: []
		});
		console.log($scope.tournament);
		$scope.tournament.$update(function(){
			$scope.newGroup = '';
		});
	};
	$scope.$on('$destroy', function () {
		socket.unsyncUpdates('tournament');
	});
});
