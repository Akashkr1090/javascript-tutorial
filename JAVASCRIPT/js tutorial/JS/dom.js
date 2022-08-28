console.log('welcome to DOM(document object modal)')

let a = document;
// 
a = document.all;
// a = document.head;

Array.from(a).forEach(function(element){
    console.log(element);
})

console.log(a);