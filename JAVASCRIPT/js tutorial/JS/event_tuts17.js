console.log('This is tutorial 17 on events');

document.getElementById('container').addEventListener('mouseover', function(e){
console.log('you have clicked the heading');
// console.log(e);

let variable;
variable= e.target.className;

// variable = e.offsetX;
// variable = e.offsetY;


// client x and y are used to find where you click on the window screen
// variable = e.clientX;
// variable = e.clientX;
console.log(variable);




// link linking the text
// location.href = '//whatsapp.com'

});