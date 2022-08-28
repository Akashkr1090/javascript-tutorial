// adding and removing text , class ,id etc;

console.log('this is tut 16')

let element = document.createElement('li');

// adding cllass name
element.className = 'akash';
// adding id
element.id = 'AK';
// adding attribute
element.setAttribute('title', 'created by js')
element.innerHTML = 'Hello world'
let div = document.querySelector('div.container1');

// inserting into child 2 class container
h1.appendChild(element);
console.log(div)
console.log(element)