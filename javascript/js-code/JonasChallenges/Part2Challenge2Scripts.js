`use strict`;
console.log("Challenge #2");


function calcTip(bill){
    // if(bill>=50&&bill<=300)return 0.15*bill;
    // else 0.2*bill;
    return (bill>=50&&bill<=300)? 0.15*bill:0.2*bill;
}
console.log(calcTip(100))

const bills=[];
bills.push(125,555,44);
console.log(bills);

const tips=new Array;
for(i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]));
}
console.log(tips);
const total=new Array;
for(i=0;i<bills.length;i++){
    total.push(tips[i]+bills[i]);
}
console.log(total);
