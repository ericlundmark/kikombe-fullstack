'use strict';

angular.module('kikombeApp')
  .controller('TournamentCtrl', function ($scope, $http, $modal) {
    $scope.message = 'Hello';
    $http.get('/api/tournaments').success(function(tournaments) {
      $scope.tournaments = tournaments;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/tournaments', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.active = function(){
		return this.start>=Date.now()&&this.start<=this.end;
	};
	$scope.format = function(date){
		return this.date;
	};
	$scope.open = function () {
		var modalInstance = $modal.open({
			templateUrl: 'tournamentModal.html',
			controller: 'TournamentModalCtrl',
			size: 'lg'
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
  }).controller('TournamentModalCtrl', function ($scope, $modalInstance) {

	$scope.name = "";
	$scope.start = {};
	$scope.end = {};

	$scope.ok = function () {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});
