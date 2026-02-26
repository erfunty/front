'use strict'

const checkDogs=function(dogsJulia,dogsKate){
    let shallowCopy=dogsJulia.slice(1,-2);
    console.log(shallowCopy);
    let bothDogs=shallowCopy.concat(dogsKate)//[...shallowCopy,...dogsKate]
    console.log(bothDogs);
    bothDogs.forEach(function(age,i){
        console.log((age>3)?`Dog number ${i+1} is an adult, and is ${age} years old`: `Dog number ${i+1} is still a puppy`);
    });
}
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])