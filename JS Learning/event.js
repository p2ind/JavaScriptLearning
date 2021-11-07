const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector('.todo-nr b');
const txtValue = document.querySelector('.name-input');

//console.log(txtValue.value);
const items = todoList.children;
//console.log(items);
//const mainTitle = document.querySelector('.mainTitle');
//console.log(mainTitle);

//CLICK, SCROOLL, RESIZING THE BROWSER

//ATTACH A EVENT LISTENER
button.addEventListener('click',function(e){
   
    e.preventDefault();
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = txtValue.value;
    todoList.appendChild(newItem);
     
    txtValue.value ='';
    todoNr.innerText = items.length;

    //CREATE THE ELEMENT AND ATTACHING THE LISTENER
    newItem.addEventListener('click',deleteItem);
});

function deleteItem(e)
{
   e.stopPropagation();
    e.target.remove();
    todoNr.innerText = items.length;
}

// todoNr.innerText = items.length;

// button.addEventListener('click',function(){
//     // mainTitle.style.color = "Red";
//     // mainTitle.style.fontSize = '50px';
//     mainTitle.classList.toggle('spectacular');
// });