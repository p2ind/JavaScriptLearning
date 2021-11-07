//For Loops

// for(let i=0;i<=100;i++)
// {
//     console.log(i);
// }

//const names = ['Pankaj Saxena','Anurag Saxena','Gaurav Saxena','Divyansh Saxena','Shilpi Saxena','Anita Saxena'];

// for(let name of names){
//     console.log(names.indexOf(name));
// }

//SPECIFICALLY FOR ARRAYS
// names.forEach(function(name,index){
//   console.log(name, index);
// })

const user = {
    name : 'pankaj saxena',
    age : 37,
    subscribers : 200,
    money : 'lolno'
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}