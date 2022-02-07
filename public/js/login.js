const form = document.querySelector('form');
const emailError = document.querySelector('.email.err')
const passwordError = document.querySelector('.password.err')

form.addEventListener('submit', async(e) => {
  e.preventDefault();
  
  //reset errors
  emailError.textContent = '';
  passwordError.textContent = '';

  //get the values from the form

  const email = form.email.value;
  const password = form.password.value;
  // console.log(email, password)

  try {
    const res = await fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type' : 'application/json'}
    })
    const data = await res.json();
    console.log(data);
    if (data.errs){
      emailError.textContent = data.errs.email;
      passwordError.textContent = data.errs.password;
    }

    // if(data.user){
    //   location.assign('/api')
    // }
  
    if (data.user){
    alert('You have successfully logged in!')
    form.reset()
  }
  } 

  catch (error) {
    console.log(error);
  }


})
