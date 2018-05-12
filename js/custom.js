(function(){

 //Initialize firebase
  var config = {
    apiKey: "AIzaSyBEJOp1ZM3GoUuFEVuc-c0ezrI90Lxf4wA",
    authDomain: "mipr-c07c8.firebaseapp.com",
    databaseURL: "https://mipr-c07c8.firebaseio.com",
    projectId: "mipr-c07c8",
    storageBucket: "mipr-c07c8.appspot.com",
    messagingSenderId: "136618438101"
  };
  firebase.initializeApp(config);
  
 //Get elements
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSingUp = document.getElementById("btnSingUp");
  const btnLogout = document.getElementById("btnLogout");
 
 //add login event
  btnLogin.addEventListener('click', e => {
    //get email and pass
   const email = txtEmail.value;
   const pass = txtPassword.value;
   const auth = firebase.auth();

  //Sing In
  
   const promise = auth.signInWithEmailAndPassword(email, pass);

    promise.catch(e => showAlert(e.message));
   
         function showAlert(message) {
          $('#alertmessage').html("<div class='alert alert-danger' role='alert'>"+message+"</div>");
          $('#alertmessage').show();
          }
  });

  
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        console.log(firebaseUser);
        console.log("Logueado");
      }else{
        console.log("No estas logueado");
      }
    
	  });

 
 
}());




/*auth.createUserWithEmailAndPassword(email,password);

document.getElementById("btnLogin").addEventListener('click', e=>{
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPassword").value;
 
 auth.signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
 
  const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
  promise.catch(e=>{ console.log(e.massage)})
});

auth.onAuthStateChanged(firebaseUser => {});

auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});*/
