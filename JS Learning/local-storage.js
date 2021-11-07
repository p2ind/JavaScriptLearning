// //LOCAL STORAGE
// localStorage.setItem('todo','Feed the cat');
// localStorage.setItem('user','Pankaj');
// localStorage.setItem('todo','Feed myself');

// //SESSION STORAGE
// sessionStorage.setItem('todoList','session feeding cat');

//GETTING STUFF BACK
// const user = localStorage.getItem("user");
// console.log(user);

//localStorage.clear();

//const todoList = ['feed the cat','wash','listen to some classical music'];


const todoList = {
    todo1: "feeding the cat",
    todo2:"feeding myself"
}

localStorage.setItem('todos',JSON.stringify(todoList));

const reterived = JSON.parse(localStorage.getItem('todos'));
console.log(reterived);