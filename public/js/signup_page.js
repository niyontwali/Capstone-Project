const form = document.querySelector('form');

const fullNameError = document.querySelector('.fullName.err')
const userNameError = document.querySelector('.userName.err')
const emailError = document.querySelector('.email.err')
const telNumberError = document.querySelector('.telNumber.err')
const passwordError = document.querySelector('.password.err')
const confirmPasswordError = document.querySelector('.confirmPassword.err')


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  //clearing out errors when ok and when we submit

  fullNameError.textContent = '';
  userNameError.textContent = '';
  emailError.textContent = '';
  telNumberError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  //get the values from the form

  const fullName = form.fullName.value;
  const userName = form.userName.value;
  const email = form.email.value;
  const telNumber = form.telNumber.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;
  // console.log(fullName, userName, email, telNumber, password, confirmPassword)
  try {
    const res = await fetch('/users/signup', {
      method: 'POST',
      body: JSON.stringify({ fullName, userName, email, telNumber, password, confirmPassword}),
      headers: { 'Content-Type' : 'application/json'}
    })
    const data = await res.json();
    console.log(data);
    if (data.errs){
      fullNameError.textContent = data.errs.fullName;
      userNameError.textContent = data.errs.userName;
      emailError.textContent = data.errs.email;
      telNumberError.textContent = data.errs.telNumber;
      passwordError.textContent = data.errs.password;
      confirmPasswordError.textContent = data.errs.confirmPassword;
    }
  } 
  catch (error) {
    console.log(error);
  }

  if (!data.errs){
     form.reset();
  }
 

})