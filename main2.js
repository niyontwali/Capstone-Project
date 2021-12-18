let trainees = ["John Niyontwali", "Mugabo Diana", "Salex", "Marcel"];

const list = document.getElementById('trainee_list');

function addTrainee(lst){
     trainees.forEach(trainee => {
         const li = document.createElement('li');
         li.innerHTML = trainee;
         list.appendChild(li)
     })
}
// document.onload = addTrainee(trainees);

// Now we can use onclick event

// By the use of getElementbyTagName('button')[0];
const but = document.getElementsByTagName('button')[0];
but.onclick = addTrainee;




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
