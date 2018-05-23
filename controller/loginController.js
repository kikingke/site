angular.module("myApp.loginController",['ngRoute','firebase'])


.controller('loginController', ['$scope','firebaseAuth', function($scope,$firebaseAuth) {
    $scope.signIn = function(){

    let username = $scope.user.email;
    let password = $scope.user.password;
    let auth = $firebaseAuth();
    auth.$signInWithUserEmailAndApssword(username,password)
    .then(function(user){
      console.log(user.uid);
    })
    .catch(function(error){
      console.log(error);
    })

    

  };
}]);