// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyBIscCB02iHhDez-TcBkKcZfmjzIoPnhEU",
  authDomain: "auth-form-f8e6b.firebaseapp.com",
  projectId: "auth-form-f8e6b",
  storageBucket: "auth-form-f8e6b.appspot.com",
  messagingSenderId: "250058601445",
  appId: "1:250058601445:web:dbe42c46bc72d63bb2f50c"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            window.location.href='index.html'
            // Signed in 
            // document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            alert("YOUR ID  ALREADY EXISTS");
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            window.location.href='index.html'
            // Signed in 
            // document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            alert("wrong ID or PASSWORD");
            console.log(error.code);
            console.log(error.message)
        });
}