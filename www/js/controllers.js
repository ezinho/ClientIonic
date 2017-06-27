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
  var parameter = JSON.stringify({type:"word", label:+$scope.addWord.word});

    // Perform the login action when the user submits the login form
  $scope.doAdd = function() {
    console.log('word added', $scope.addWord.word);
     var parameter = "{'word' : {	'label' : '"+$scope.addWord.word+"'}}"
    $http.post('http://172.20.10.14:8080/server/remote/services/words',parameter).
    then(function(response) {
            $scope.greeting = response.data;
            console.log(response)
        });
  };

    $scope.doSearch = function() {
    console.log('word search', $scope.searchWord.word);
        $http.get('http://172.20.10.14:8080/server/remote/services/words?contains='+$scope.searchWord.word).
        then(function(response) {
            $scope.greeting = response.data;
            console.log(response)
        });
  };

})


.controller('dicoCtrl', function($scope, $stateParams) {
});
