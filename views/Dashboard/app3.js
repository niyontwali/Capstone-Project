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
  
    //Log out Function
    let logOutBut = document.getElementById('logOut')
    logOutBut.addEventListener('click', (e) => {
        e.preventDefault()

        auth.signOut()
        alert('signout')
        window.location = 'sign_in.html'
    })
    