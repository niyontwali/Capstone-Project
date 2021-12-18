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
  const database = firebase.database()

  //Sign Up Function

  let signUpBut = document.getElementById('but')
  signUpBut.addEventListener('click', (e) =>{
      //Preventing defauld behavior
      e.preventDefault()

        var fullName = document.getElementById('full-name').value;
        var userName = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var telNumber = document.getElementById('number').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('conf-password').value;

        auth.createUserWithEmailAndPassword(email, password)
        // .then((userCredentials) => {
        //     // console.log(userCredentials)
        //     var user = userCredentials.user
        //     console.log(user.email)
        // }) 
        // .catch((error) => { 
        //     var errorMessage = error.code
        //     alert(errorMessage)
        // })
        .then(function(){
         var user = auth.currentUser
        //add this uder to Firebase Database
         var database_ref = database.ref()
         //create user data
         var user_data = {
         fullName: fullName,
         userName: userName,
         email: email,
         telNumber: telNumber,
                     
            };
              
        database_ref.child('userInfo/' + user.uid).set(user_data)
              
        alert('User Created')
          })
         .catch(function(error){
          //Firebase will use this to alert of its errors
          var error_code = error.error_code
         var error_message = error.message
         alert(error_message)
        })
  })

