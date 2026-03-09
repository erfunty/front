const calcAverageHumanAge=function(ages){
const humanAges= ages.map(function(age){//it's torture to write this way
    return age<=2? 2*age:age*4+16;
})
const adultHuman= humanAges.filter(function(age){
    return age>=18

})
let sumAdult=adultHuman.reduce(function(acc,cur){
    return acc+cur

},0);
// for(const adult of adultHuman){sumAdult+=adult}

const avg=sumAdult/adultHuman.length;
return avg
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
 console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); 