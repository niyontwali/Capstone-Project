let fullName = document.getElementById('full-name');
let userName = document.getElementById('username');
let email = document.getElementById('email');
let telNumber = document.getElementById('number');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('conf-password');
let form = document.getElementById('form');

function validateInput(){
    //validation for the Fullname
    if(fullName.value.trim() === ""){
        onError(fullName, 'The Full Name cannot be empty')
    }else{
        onSuccess(fullName)
    }
    
    //endvalidation for the Fullname

    //validation for the username
    if(userName.value.trim() === ""){
        onError(userName, "Username cannot be empty");
    }else{
        onSuccess(userName);
    }
    //endvalidation for username
    
    //validation for email
    if(email.value.trim() ===""){
        onError(email, 'Email cannot be empty'); 
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email, 'Email is not valid');
        }else{
            onSuccess(email);
        }
    }
    //endvalidation for email

    //validation for tel number
    if(number.value.trim() === ""){
        onError(number, 'Tel Number cannot be empty')
    }else{
        if(number.value.length !== 10){
            onError(number, 'Tel Number should be 10 digits')
        }else{
            onSuccess(number)
        }
    }
    //endvalidation for tel number

    //validation for password
    if(password.value.trim() === ""){
        onError(password, 'Password cannot be empty')
    }else{
        if(password.value.length <= 6){
            onError(password, 'Password should be more than  6 characters')
        }else{
            onSuccess(password);
        }
    }
    //endvalidation for password

    //validation for confirm password
    if(confirmPassword.value ===""){
        onError(confirmPassword, 'The confirm password field cannot be empty')
    }else{
        if(confirmPassword.value.trim() !== password.value.trim()){
            onError(confirmPassword, 'The passwords must match')
        }else{
            onSuccess(confirmPassword)
        }
    }
    //endvalidation for confirm password
}

form.addEventListener('submit', (err) =>{
    err.preventDefault()
    validateInput();
    });
function onSuccess(input){
    let parent = input.parentElement;
    let messageEle = parent.querySelector('small');
    messageEle.style.visibility = 'hidden';
    parent.classList.remove('error');
    parent.classList.add('success')
}
function onError(input,message){
    let parent = input.parentElement;
    let messageEle = parent.querySelector('small');
    messageEle.style.visibility = 'visible';
    messageEle.innerText = message;
    parent.classList.add('error');  
    parent.classList.remove('success');
}


function isValidEmail(email){
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}
fullName.addEventListener('onchange', (dismess) => {
    fullName.style.border ="2px solid #2bc2ec";
    console.log(dismess)
})


