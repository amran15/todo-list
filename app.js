// grab object
let input = document.querySelector('.add');
let btn = document.querySelector('.btn');
let list = document.querySelector('.list');
// let element = document.getElementsByTagName('li');

//EventListener
btn.addEventListener('click', addTodo);

//Functions

function addTodo(event) {
    //prevents form from submitting
    event.preventDefault(); 
    //create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    //create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'make coffee';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
}
