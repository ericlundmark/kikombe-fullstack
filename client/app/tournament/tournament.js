'use strict';

angular.module('kikombeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tournament', {
        url: '/tournament',
        templateUrl: 'app/tournament/tournament.html',
        controller: 'TournamentCtrl'
      });
  });
