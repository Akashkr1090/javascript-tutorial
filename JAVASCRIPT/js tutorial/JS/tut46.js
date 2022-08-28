// console.log('this is tutorial fourty six on javascript')
console.log('regular expression are used for finding search matches and highlight it')

let reg = /This/  // this is a  regular expression litereal in js
reg = /This/g  // g means global
// reg = /This/i  // i means global not a case senstive

// console.log(reg);
// console.log(reg.source);

// function to match expression
let s = "This is a great akash and This is wonderful";

// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s)
// console.log(result)
// console.log(result.input)
// console.log(result.index)


// result = reg.exec(s)
// console.log(result)
// result = reg.exec(s)
// console.log(result)  // we can use multiple exec with global flag

// 2. test() - Return true or false
let result2 = reg.test(s);
// console.log(result2);


// 3. match()  - It will return an array of results or null
let  result3 = s.match(reg)    //this is right
// let  result3 = reg.match(s)    //this is wrong
// console.log(result3)

// 4. search() - Returns index of first match else -1////////
// let result4 = reg.search(s)     this is wrong
let result4 = s.search(reg)
// console.log(result4)

// 5. replace()  return new replaced string with all the replacement (if no global flag is given only first match will be replaced)
let result5  = s.replace(reg, "ooooooooooo");
console.log(result5)
