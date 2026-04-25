'use strict'

class Carcl{
    constructor(make,speed){
        this.make=make
        this.speed=speed
    }
    get speedUS(){
        return this.speed/1.6
    }
    set speedUS(s){
        this.speed=s*1.6
    }
    accelerate(){
    this.speed+=10
    console.log(this.speed,this.make)} 
    brake(){
    this.speed-=10
    console.log(this.speed,this.make);
    }
}
const Ford=new Carcl('Ford',120)
console.log(Ford.speedUS);
Ford.speedUS=10
console.log(Ford.speedUS);