
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let form = document.getElementById('form');

console.log(email,password)

function validateInput(){
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

    

    //validation for password
    if(password.value.trim() === ""){
        onError(password, 'Password cannot be empty')
    }else{
            onSuccess(password);
        }
    //endvalidation for password

    
}

form.addEventListener('submit', (err) =>{
    err.preventDefault()
    validateInput()
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
