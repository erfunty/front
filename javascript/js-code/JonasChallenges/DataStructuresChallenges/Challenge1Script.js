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
const [players1,players2]=game.players;
console.log(players1,players2);
//2
const [gk,...fieldPlayers]=game.players[0]
console.log(gk,fieldPlayers);
//3
const allPlayers=[...game.players[0],...game.players[1]]
console.log(allPlayers);
//4
const players1Final=[...game.players[0],'Thiago','Coutinho','Perisic']
console.log(players1Final);
//5
const {team1,x:draw,team2}=game.odds;
console.log(team1,draw,team2);
//6
const printGoals=function(...playerNames){
    console.log(playerNames,game.scored.length);

}
printGoals('Davies', 'Muller', 'Lewandowski' ,'Kimmich');
//7
console.log((game.odds.team1>game.odds.team2&&'team2')||(game.odds.team1<game.odds.team2&&'team1'));