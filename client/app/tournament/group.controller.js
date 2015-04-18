'use strict';

angular.module('kikombeApp')
.controller('GroupCtrl', function ($scope, socket, $location, tournament, $stateParams, Game) {
	$scope.group = _.find(tournament.groups, {name: $stateParams.groupId});
	$scope.go = function(group) {
		$location.path('tournaments/' + $scope.tournament._id + '/group/' + group);
	};
	$scope.game = new Game();
	var games = $scope.group.games;
	console.log(games);
	$scope.games = Game.query({ _id: { $in: games } });
	$scope.addGame = function(){
		$scope.game.$save(function(){
			$scope.group.games.push($scope.game._id);
			tournament.$update(function(){
				$scope.game = new Game();
			});
		});
	};
	$scope.$on('$destroy', function () {
		socket.unsyncUpdates('tournament');
	});
});
