console.log("Challenge #3");
const dolphinsScore1=96;
const dolphinsScore2=108;
const dolphinsScore3=89;

const koalasScore1=88;
const koalasScore2=91;
const koalasScore3=110;

avDolphinsScores=(dolphinsScore1+dolphinsScore2+dolphinsScore3)/3;
avKoalasScores=(koalasScore1+koalasScore2+koalasScore3)/3;
if(avDolphinsScores>avKoalasScores&&avDolphinsScores>=100){
    console.log(`Dolphins win`);
} else if(avDolphinsScores<avKoalasScores&&avKoalasScores>=100){
    console.log(`Koalas win`);
} else if(avDolphinsScores===avKoalasScores&&avDolphinsScores>=100&&avKoalasScores>=100){
    console.log(`draw`);
}
