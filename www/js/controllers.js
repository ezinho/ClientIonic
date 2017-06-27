angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  $scope.addWord = {};
  $scope.searchWord = {};

    // Perform the login action when the user submits the login form
  $scope.doAdd = function() {
    console.log('word added', $scope.addWord);
  };

    $scope.doSearch = function() {
    console.log('word search', $scope.searchWord.word);
        $http.delete('http://10.162.128.70:8080/server/remote/services/words/1').
        then(function(response) {
            $scope.greeting = response.data;
            console.log(response)
        });
  };

})


.controller('dicoCtrl', function($scope, $stateParams) {
});
