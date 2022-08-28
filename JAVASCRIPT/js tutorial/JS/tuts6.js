// to concaniate string

h1= "akjfkad";
h3 = "kiksklfs";

h1= h1.concat('this', 'ur');
// console.log(h1)

// console.log(h1.length);
// console.log(h1.toLowerCase());
// console.log(h1.toUpperCase());

let name ="Akash1";
let fruits1= 'orange';
let fruits2= 'mango';

let myHtml =`Hello ${name}
            <h1> This is heading </h1>
            <h1>you like ${fruits2} and ${fruits1}</h1>
            `;

document.body.innerHTML = myHtml;


