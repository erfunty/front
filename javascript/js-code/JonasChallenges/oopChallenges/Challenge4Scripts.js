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
    return this
    }
}
class EVCl extends Carcl{
    #charge;
    constructor(make,speed,charge){
        super(make,speed)
        this.#charge=charge
    }
    chargeBattery(chargeTo){
        this.#charge=chargeTo
        return this;
    }
    accelerate(){
        this.speed+=20
        this.#charge--
    console.log(`Tesla going at ${this.speed}km/h, with a charge of ${this.#charge}%`)
    return this
    }
}
const Rivian=new EVCl('Rivian',120,23)
console.log(Rivian.accelerate().brake().chargeBattery(86))