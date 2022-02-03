const password = document.getElementById('password')
const number = document.getElementById('number')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

 
form.addEventListener('submit', (err) => {
    let messages = []
    // if (name.value === '' || name.value == null){
    //     displayMessage.push('Your Full Name is required')
    // }
    if (password.value.length <= 6){
        messages.push('Your password must be more than 6 characters and it must contain both numbers and alphabets!')
    }
    if (number.value.length = 10){
        messages.push("The mobile number must contains 10 digits")
    }
    if (messages.length > 0){
        err.preventDefault()
        errorElement.innerText = messages.join ('\n')
    }
})