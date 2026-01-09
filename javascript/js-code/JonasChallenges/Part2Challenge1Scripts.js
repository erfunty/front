`use strict`;

const calcAverage=(score1,score2,score3)=>(score1+score2+score3)/3;

 function checkWinner(avgDolhins,avgKoalas){
    if(avgDolhins>2*avgKoalas)console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
    else if(avgKoalas>2*avgDolhins)console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    else console.log(`no team wins`);
 }
let avDolphinsScores=calcAverage(44,23,71);
let avKoalasScores=calcAverage(65,54,49);
checkWinner(avDolphinsScores,avKoalasScores);
avDolphinsScores=calcAverage(85,54,41);
avKoalasScores=calcAverage(23,34,27);
checkWinner(avDolphinsScores,avKoalasScores);
