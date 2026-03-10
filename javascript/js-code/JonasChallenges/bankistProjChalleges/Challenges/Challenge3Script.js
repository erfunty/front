const calcAverageHumanAge=function(ages){
    return ages
    .map(ageD=>ageD<=2?2*ageD:ageD*4+16)
    .filter(ageH=>ageH>=18)
    .reduce((acc,ageH,i,arr)=>{
        return acc+ageH/arr.length
    },0)
    
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); 