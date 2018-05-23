

 (function() {
  const emailuser = '';
  
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


    firebase.auth().onAuthStateChanged(function(user){
              if (user) {
              var displayName = user.displayName;
              emailuser = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              console.log('Usuarios activos '+ email);
               console.log(emailuser);
              // console.log( window.location);
              //     console.log( window.location.pathname);
//                try{
                window.location.href = '/site/#!/home';
//                }catch(e){
//                console.log(e);
//                }
            //  console.log('changed1');
                 
              }else{
                window.location.href = '/site/#!/';
                console.log('No hay usuarios activos');
              }
          })

 
           
       

app.controller('loginController', function($scope) {
 // $scope.message = 'Home Site';
  $scope.signIn = function(){
   var email = $scope.user.txtEmail;
   var password = $scope.user.txtPassword;
   
   firebase.auth().signInWithEmailAndPassword(email, password)
   .then(function(){
    
   })
   .catch(function(error){
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log(errorCode);
     console.log(errorMessage);

   });

  }




     

});
 

app.controller('homeController', function($scope) {
 console.log(emailuser);
 $scope.email = emailuser;
  $scope.signOut = function(){
    firebase.auth().signOut();
    //window.location.href = '/';
   window.location.href = '/site/#!/';
  }

});







// Initialize Firebase
/*var config = {
  apiKey: "AIzaSyBEJOp1ZM3GoUuFEVuc-c0ezrI90Lxf4wA",
  authDomain: "mipr-c07c8.firebaseapp.com",
  databaseURL: "https://mipr-c07c8.firebaseio.com",
  projectId: "mipr-c07c8",
  storageBucket: "mipr-c07c8.appspot.com",
  messagingSenderId: "136618438101"
};
firebase.initializeApp(config);

const auth = firebase.auth();

document.getElementById('btnLogin').addEventListener('click', e=>{
  const email = document.getElementById("txtEmail").value;
  const pass = document.getElementById("txtPassword").value;
  const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
  promise.catch(e=>{ console.log(e.massage)})
})

function initState() {
  firebase.auth().onAuthStateChanged(user=>{ 
    if(user){
      document.getElementById("btnLogOut").classList.remove('hide');
      document.getElementById('status').textContent = 'Signed In';
    } else{
      document.getElementById("btnLogOut").classList.add('hide')
    }
  })
}

document.getElementById("btnLogOut").addEventListener('click', e=>{
  firebase.auth().signOut();
  console.log('logged out')
})*/


 
})();
 

  

  

