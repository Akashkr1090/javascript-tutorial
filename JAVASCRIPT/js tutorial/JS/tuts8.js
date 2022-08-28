// console.log(`function `);
let name = 'akash';
let name1 = 'akash1';
let thank = 'You become billionare...;' 

function wish(name)
{
    let message = (`Happy birthday ${name} you live long .. ${thank}`);
    return message;
}
// console.log()



let val = wish(name, 'Thanks a lot');
console.log(val);

// making function

// let person = prompt("Please enter your name", "Harry Potter");



const obj = {
    name: "skills",
    game: function(){
        return "GTA";
    }
}
console.log(obj.game())