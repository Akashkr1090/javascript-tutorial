console.log('this is tut 18');
// console.log('this is a event_listener  2 part');
let container = document.getElementsById('container');
container.addEventListener('click', func1);


function func1(e) {
    console.log("Thanks", e)
    e.preventDefault();


}