`use strict`;
console.log("Challenge #4");

function calcTip(bill){
    return (bill>=50&&bill<=300)? 0.15*bill:0.2*bill;
}
const bills=[22,295,176,440,37,105,10,1100,86,52];

const tips=[];
const totals=[];
for(i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]));
    totals.push(tips[i]+bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum=arr[i]+sum;
    }
    return sum/arr.length;
}
console.log(calcAverage(totals));