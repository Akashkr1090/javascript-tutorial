let element = document.createElement("h2");
let text = document.createTextNode("This is just text");
let text2 = document.createTextNode("This is just text 2");
element.className='container';
let p = document.querySelector('p.this')
element.appendChild(text)
p.appendChild(element)
// console.log(element);
// localStorage.setItem('');