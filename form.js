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

function userSignUp() { // Signing user up 
    
    console.log("Entered signup function");
    var email = document.getElementById("emailSignUp");
    var password = document.getElementById("passwordSignUp");
  
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed up");
  }

function userLogin() {

    var email = document.getElementById("loginEmail");
    var password = document.getElementById("loginPassword");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message)); 

    alert("Signed in as " + email.value);

}

// auth.onAuthStateChanged(function(user)) 