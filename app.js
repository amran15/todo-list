// grab object
let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let element = document.getElementsByTagName('li');

//function -- add element to our btn click 
btn.addEventListener('click', () => {
    let text = input.value;
    if(text === ' '){
        alert('you must write something');
    }else{
        let li = document.createElement('li');
        li.innerHTML = text;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
})
//function -- mark completed task
list.addEventListener('click', e => {
if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
}
})

// delete function 
