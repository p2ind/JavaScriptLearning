function greet(name)
{
    console.log(`Welcome to the website ${name}`);
}

console.log("rest of the code");

function signUp()
{
    let name = prompt("Enter your name");
    greet(name);
}

signUp();