'use strict'

const Car =function(make,speed){
    this.make=make
    this.speed=speed
}
Car.prototype.accelerate=function(){
    this.speed+=10
    console.log(this.speed,this.make);

}
Car.prototype.brake=function(){
    this.speed-=5
    console.log(this.speed,this.make);
}

const EV=function(make,speed,charge){
    Car.call(this,make,speed)
    this.charge=charge
}
EV.prototype=Object.create(Car.prototype)
EV.prototype.chargeBattery=function(chargeTo){
    this.charge=chargeTo
}
EV.prototype.accelerate=function(chargeTo){
    this.speed+=20
    this.charge--
    console.log(`Tesla going at ${this.speed}km/h, with a charge of ${this.charge}%`);
}
console.dir(EV.prototype.constructor);
EV.prototype.constructor=EV
console.dir(EV.prototype.constructor);
const Tesla=new EV("Tesla",120,23)
console.dir(Tesla.__proto__);
Tesla.accelerate()
Tesla.brake()
Tesla.chargeBattery(90)
console.log(Tesla);
  