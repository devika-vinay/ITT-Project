// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB3joK7piWfPY72fuahSjMaGBc93iVDj_U",
    authDomain: "homes-2a852.firebaseapp.com",
    projectId: "homes-2a852",
    storageBucket: "homes-2a852.appspot.com",
    messagingSenderId: "955002264254",
    appId: "1:955002264254:web:affa022685ce5d39461cef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

// auth state listener
auth.onAuthStateChanged(function(user) {
  if(user) {
    console.log(user);
    window.location.href = "http://localhost:5000/explore.html"
  }
  // else {
  //   console.log(user);
  //   window.location.href = "http://localhost:5000/signup.html"
  // }
})

// User sign up
function userSignUp() {  
    
    console.log("Entered signup function");
    var email = document.getElementById("emailSignUp");
    var password = document.getElementById("passwordSignUp");
  
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed up");
  }


// User login  
function userLogin() {

    var email = document.getElementById("loginEmail");
    var password = document.getElementById("loginPassword");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message)); 

    alert("Signed in as " + email.value);

}

// Signing in with Google
function googleSignIn() {

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    console.log("Success!");
    alert("Signed in with Google");
  }).catch((error) => {
    var errCode = error.code;
    var errMessage = error.message;
    console.log(errCode);
    console.log(errMessage);
  })

}

// function userLogout() {

//   auth.signOut();
//   alert("Signed out");  

// }

