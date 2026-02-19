'use strict'
/*underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button=document.querySelector('button')
const textarea=document.querySelector('textarea')

button.addEventListener('click',function(){
    let textArr=textarea.value.toLowerCase().split('\n');
    // console.log(textArr);
    // for(const t of text.toLowerCase().split('\n')){
    //     let [a,b]=t.trim().split('_');
    //     console.log(a+b[0].toUpperCase().concat(b.slice(1)));

    // }
    for (let i = 1; i <textArr.length+1; i++) {
        let [a,b]=textArr[i-1].trim().split('_');
        console.log((a+b[0].toUpperCase().concat(b.slice(1))).padEnd(20," "),'✅'.repeat(i));
    }

})