// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMOFHglBKwwnR2l8SOnQf5EYfjw_9aGCY",
    authDomain: "capstone-project-169de.firebaseapp.com",
    databaseURL: "https://capstone-project-169de-default-rtdb.firebaseio.com",
    projectId: "capstone-project-169de",
    storageBucket: "capstone-project-169de.appspot.com",
    messagingSenderId: "647920340850",
    appId: "1:647920340850:web:63fb3590608071fd9997eb",
    measurementId: "G-CM9ZWHD3Y1"
  };
    //Initializing Firebase
    firebase.initializeApp(firebaseConfig)
    //initializing variables
    const auth = firebase.auth()
   
  //Login Button for the Login Page

    let Butlog = document.getElementById('loginBut')
    Butlog.addEventListener('click', (e) =>{
        //Preventing defauld behavior
        e.preventDefault()
  

          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
  
          auth.signInWithEmailAndPassword(email, password)
          .then((userCredentials) => {
              // console.log(userCredentials)
              var user = userCredentials.user
            //   alert(user.email)
              window.location = 'dashboard.html'
              console.log(user.email)
          }) 
          .catch((error) => { 
              var errorMessage = error.code
              alert(errorMessage)
          })
    })
  
    