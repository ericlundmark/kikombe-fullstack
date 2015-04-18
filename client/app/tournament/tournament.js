'use strict';

angular.module('kikombeApp')
.config(function ($stateProvider) {
	$stateProvider.state('tournaments', {
		url: '/tournaments',
		templateUrl: 'app/tournament/tournaments.html',
		controller: 'TournamentsCtrl',
		resolve: {
			Tournament: 'Tournament',
			tournaments: function(Tournament){
				return Tournament.query({}).$promise;
			}
		}
	});
	$stateProvider.state('tournament', {
		url: '/tournaments/:tournamentId',
		templateUrl: 'app/tournament/tournament.html',
		controller: 'TournamentCtrl',
		resolve: {
			Tournaments: 'Tournament',
			tournament: function(Tournament, $stateParams){
				var tournamentId = $stateParams.tournamentId;
				return Tournament.get({_id: tournamentId}).$promise;
			}
		}
	});
	$stateProvider.state('group', {
		url: '/tournaments/:tournamentId/group/:groupId',
		templateUrl: 'app/tournament/group.html',
		controller: 'GroupCtrl',
		resolve: {
			Tournament: 'Tournament',
			tournament: function(Tournament, $stateParams){
				var tournamentId = $stateParams.tournamentId;
				return Tournament.get({_id: tournamentId}).$promise;
			}
		}
	});
});
