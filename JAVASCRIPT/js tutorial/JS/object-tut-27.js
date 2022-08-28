console.log('this is tutorial 27')

let car ={
    name:'maruti 800',
    topSpeed:100,
    run: function (){
        console.log('car is running');
    }
}

//creating a construction for a car
function GeneralCar(givenName, givenSpeed){
    this.name=givenName;
    this.topSpeed=givenSpeed;
    this.run = function(){
        console.log(`${this.name}is running`)
    }
    this.analyse = function(){
        console.log(`This car is slower by ${400- this.topSpeed}Kmph than farrari`)
    }
}
let car1 = new GeneralCar('Nissan',200);
let car2 = new GeneralCar('farrari',400);
console.log(car2)