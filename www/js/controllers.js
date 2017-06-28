angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $http, $state, $ionicPopup) {

  $scope.addWord = {};
  $scope.searchWord = {};
  var parameter = JSON.stringify({type:"word", label:+$scope.addWord.word});

    // Perform the login action when the user submits the login form
  $scope.doAdd = function() {
    console.log('word added', $scope.addWord.word);
     var parameter = "{'word' : {	'label' : '"+$scope.addWord.word+"'}}"
    $http.post('http://10.162.128.70:8080/server/remote/services/words',parameter).
    then(function(response) {

            var alertPopup = $ionicPopup.alert({
              title: 'Mot ajouter',
            });
            $scope.addWord.word= null
            $scope.greeting = response.data;
            console.log(response)

        });
  };

  $scope.doDelete = function(obj) {
    console.log('word delete', obj.id);
    $http.delete('http://10.162.128.70:8080/server/remote/services/words/'+obj.id).
    then(function(response) {

      console.log('deleted word')
      // $scope.addWord.word= null
      var alertPopup = $ionicPopup.alert({
        title: 'Mot supprimer',
      });
      $state.go('app.dico')

    })
  }

    $scope.doSearch = function() {
    console.log('word search', $scope.addWord.word);
        $http.get('http://10.162.128.70:8080/server/remote/services/words?contains='+$scope.addWord.word).
        then(function(response) {
          
          $scope.myArrayOfWord = response.data.word;
          console.log($scope.myArrayOfWord);
          $state.go('app.search')

        });
  };

    $scope.doFile = function() {
      console.log('search file');
          $http.get('http://10.162.128.70:8080/server/remote/services/decodedFiles').
          then(function(response) {
            
            $scope.myArrayOfFile = response.data.decodedFile;
            console.log($scope.myArrayOfFile);
            $state.go('app.file')

          });
    };

})


.controller('dicoCtrl', function($scope, $stateParams) {
});
