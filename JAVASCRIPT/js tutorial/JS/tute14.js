console.log('javascipt power')
let element = document.getElementById('Id_name')

// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
let body =document.getElementById('container');
body.style.background = 'red'

elems=document.getElementsByClassName('container1')
// console.log(elems)

elems = document.getElementsByTagName('div')
console.log(elems)


// for all 

Array.from(elems).forEach(element => {
    console.log(element)
});
