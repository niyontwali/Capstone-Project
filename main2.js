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


