console.log('this is tuttorial 20 on javascript');

localStorage.setItem('name' ,'akash') 
localStorage.setItem('name1' ,'vikash') 
let impArray = ['adrak', 'pyaz', 'bhindi']

let name = localStorage.getItem('name1')
// console.log(name)
// localStorage.clear();
// localStorage.removeItem('name1')

// to store string in localStorage
localStorage.setItem('sabzi' , JSON.stringify(impArray));
name1 = localStorage.getItem('name')
name1 = JSON.parse(localStorage.getItem('sabzi'))
console.log(name1)










