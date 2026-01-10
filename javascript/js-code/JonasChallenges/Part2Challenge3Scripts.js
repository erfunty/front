`use strict`;
console.log("Challenge #3");

const John ={
     fullName:"John Smith",
     mass:92,
     height:1.92,
     
    
     calcBMI: function(){
        this.BMI=this.mass/this.height**2;
        return this.BMI;
     }
};
const Mark ={
     fullName:"Mark Miller",
     mass:78,
     height:1.69,
     
     
     calcBMI: function(){
        this.BMI=this.mass/this.height**2;
        return this.BMI;
     }
};
console.log((Mark.calcBMI()>John.calcBMI())? `${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s (${John.BMI})!`:
`${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s (${Mark.BMI})!`)
