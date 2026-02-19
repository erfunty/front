'use strict'

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));
for(const info of flights.split('+')){
    let infoSeprat=info.split(";")
    // console.log(infoSeprat); 
    let state=infoSeprat[infoSeprat.length-4].split("_");
    // console.log(state);
    console.log(`${state.includes("Delayed")? `🔴${state[1]+" "+state[2]}`:`${state[1]}`} from ${infoSeprat[infoSeprat.length-3].slice(0,3).toUpperCase()} to ${infoSeprat[infoSeprat.length-2].slice(0,3).toUpperCase()} (${infoSeprat[infoSeprat.length-1].replace(':','h')})`.padStart(50));
}