(function() {
  var app = angular.module('myApp', ['ngRoute']);
  
  app.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl : 'view/login.html',
      controller  : 'loginController'
    })
    .when('/home', {
      templateUrl : 'view/home.html',
      controller  : 'homeController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

  app.controller('loginController', function($scope) {
  $scope.message = 'Login Site';
});

app.controller('homeController', function($scope) {
  $scope.message = 'Home Site';
});
 
})();
 

  // Initialize Firebase
  /*var config = {
    apiKey: "AIzaSyBEJOp1ZM3GoUuFEVuc-c0ezrI90Lxf4wA",
    authDomain: "mipr-c07c8.firebaseapp.com",
    databaseURL: "https://mipr-c07c8.firebaseio.com",
    projectId: "mipr-c07c8",
    storageBucket: "mipr-c07c8.appspot.com",
    messagingSenderId: "136618438101"
  };
  firebase.initializeApp(config);*/


