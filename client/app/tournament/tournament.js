'use strict';

angular.module('kikombeApp')
.config(function ($stateProvider) {
	$stateProvider.state('tournaments', {
		url: '/tournaments',
		templateUrl: 'app/tournament/tournaments.html',
		controller: 'TournamentsCtrl'
	});
	$stateProvider.state('tournament', {
		url: '/tournaments/:tournamentid',
		templateUrl: 'app/tournament/tournament.html',
		controller: 'TournamentCtrl'
	});
});
