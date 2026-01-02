console.log("Challenge #2");
const JohnsMass=92;
const JohnsHeight=1.95;
const MarksMass=78;
const MarksHeight=1.69;

const JohnsBMI=JohnsMass/JohnsHeight**2;
const MarksBMI=MarksMass/MarksHeight**2;
if(JohnsBMI>MarksBMI){
    console.log(`John's BMI (${JohnsBMI}) is higher than Mark's (${MarksBMI})!`);
}else{
    console.log(`Mark's BMI (${MarksBMI}) is higher than John's (${JohnsBMI})!`);
}