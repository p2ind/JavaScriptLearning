let userInput = prompt('Tell me a fruit');

switch(userInput){
    case 'banana':
        console.log('Wow I Love Bananas too');
        fruitNr =1;
        break;
    case 'apple':
        console.log(`I don't like apples you crazy`);
        fruitNr = 2;
        break;
    case 'avocado':
        console.log('What fruit is this?');
        fruitNr=3;
        break;
    default:
        console.log('What fruit is that?');
        break;
}