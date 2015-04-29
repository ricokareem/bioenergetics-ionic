angular.module('starter.controllers', [])

// example of serving a plain html page
// .controller('PlainOleController', function($scope) {})

.controller('HomeController', function($scope) {})

.controller('InfoController', function($scope) {})

.controller('AilmentsController', function($scope, Ailments) {
  $scope.ailments = Ailments.all();
  $scope.remove = function(ailment) {
    Ailments.remove(ailment);
  }
})

.controller('AilmentDetailController', function($scope, $stateParams, Ailments) {
  $scope.ailment = Ailments.get($stateParams.ailmentId);
})

.controller('movementCardsController', function($scope, movementCards) {
  $scope.movementCards = movementCards.all();
})

.controller('movementCardDetailController', function($scope, $stateParams, movementCards) {
  $scope.movementCard = movementCards.get($stateParams.movementCardId);
});

// example of a controller with presets
// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
