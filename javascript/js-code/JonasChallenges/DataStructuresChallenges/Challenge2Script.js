'use strict';

const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',
],
[
'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze',
],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
'Hummels'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},
};
//1
for(const [ngoal,goaler] of game.scored.entries()){
    console.log(`Goal ${ngoal+1}: ${goaler}`);
}
//2
let sum=0;
for(const odd of Object.values(game.odds)){
    sum+=odd;
}
console.log(sum/3);
//3
for(const [name,odd] of Object.entries(game.odds)){
    console.log(`Odd of ${game[`${name}`]?`victory ${game[`${name}`]}`:"draw"} :${odd}`);
}
//4
let scorers={};
for(const name of game.scored){
    if(!Object.keys(scorers).includes(name)){
        scorers[name]=1;
    }else{
        scorers[name]+=1
    }
}
//scorers[player] ? scorers[player]++ : (scorers[player] = 1);
console.log(scorers);