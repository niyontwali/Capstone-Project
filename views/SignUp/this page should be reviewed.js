
  //   const database = firebase.database() 
  //   //Set up our SignUp functions
  //   function signUp() {
  //      fullName = document.getElementById('full-name').value;
  //      userName = document.getElementById('username').value;
  //      email = document.getElementById('email').value;
  //      telNumber = document.getElementById('number').value;
  //      password = document.getElementById('password').value;
  //      confirmPassword = document.getElementById('conf-password').value;
       
  //   }  
  
  //   auth.createUserWithEmailAndPassword(email = email, password = password)
  //   .then(function(){
  //       var user = auth.currentUser
  //       //add this uder to Firebase Database
  //       var database_ref = database.ref()
  //       //create user data
  //       var user_data = {
  //           fullName: fullName,
  //           userName: userName,
  //           email: email,
  //           telNumber: telNumber,
            
  //       };
    
  //       database_ref.child('users/' + user.uid).set(user_data)
    
  //       alert('User Created')
  //   })
  //   .catch(function(error){
  //       //Firebase will use this to alert of its errors
  //       var error_code = error.error_code
  //       var error_message = error.message
  //       alert(error_message)
  //   })
        
  //       form.addEventListener('submit', (err) =>{
  //           err.preventDefault()
  //           signUp();
  //           });
  
  