console.log('this is javascript tutorial on phototype')

const proto={
    slogan: function(){
        return `this company is the best`;
    },
    changeName: function(newName){
        this.name = newName
    }
}
// this is create akash object
const akash = Object.create(proto);
akash.name ="AKASH";
akash.role ="pro"
akash.changeName("Akash2")
akash.changeName("kumar")
// console.log(akash)

// This is create akash Object
const akash1 = Object.create(proto,{
    name:{value: "akash",writable:true},
    role:{value:"programmer"},
});
akash1.changeName("Ak2")
// console.log(akash1)

// Employee constructor(only made a constructor not a object)
function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.exerience = experience;
}
// slogan
Employee.prototype.slogan = function(){
    return `this company is the best. Regard, ${this.name}`;
}
// creating Object
let akashObj = new Employee("Akash", 400000, 22);
console.log(akashObj.slogan())

// programmer
// creating constructor
function programmer(name, salary, experience, language){
    // Employee.call function call the employee function we prevous define
    Employee.call(this, name, salary, experience);
    this.language = language;
}
// inherit(adding) the prototype
// programmer.prototype = Object.create(Employee.prototype)

// Manually set the constructor
programmer.prototype.constructor = programmer;
let rohan = new programmer("Rohan" ,300000, 0, "JavaScript");
console.log(rohan)