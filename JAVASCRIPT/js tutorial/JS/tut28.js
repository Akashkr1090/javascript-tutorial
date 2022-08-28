console.log('this is tutorial 28 on javascript')

let obj = {
    name: "Akash",
    Channel: "Future_stick",
    address: "home"
    
}

function Obj(givenName){
    this.name = givenName
}
// Addinf a function
Obj.prototype.getName =  function (){
    return this.name;
}
// adding another function in prototype
Obj.prototype.setName =  function (newName){
    this.name=newName;
}
let obj2=new Obj("ak");
console.log(obj2)