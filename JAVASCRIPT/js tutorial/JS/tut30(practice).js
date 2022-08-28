console.log("practice time")
// creating constructor
const proto={

}
const floor=Object.create(proto);
floor.name="superGold";

function cake(name){
    this.name=name;
}

// inherit Object
let cake = new floor("superGold")
console.log(cake)
