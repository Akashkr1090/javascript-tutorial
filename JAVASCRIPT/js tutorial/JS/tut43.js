console.log('this is tutorial on ascronous and secronous')

// async return promise
async function akash(){
    console.log('Inside akash function')
    const response = await fetch('https://api.github.com/users')
    console.log("before response")
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "akash";
}
console.log('before call akash')
let a = akash();
console.log('after calling akash')
console.log(a)
a.then(data=> console.log(data))
console.log('last line of this js file')