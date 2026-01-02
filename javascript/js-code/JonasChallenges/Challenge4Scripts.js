console.log("Challenge #4");
const bill=275;
const tip=(bill<300&&bill>50)? 0.15*bill:0.2*bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill+tip}`)