'use strict';

const dice=document.querySelector('.dice');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const btnNew=document.querySelector('.btn--new');

dice.classList.add('hidden')
score0El.textContent=0;
score1El.textContent=0;
const scors=[0,0];
let turn=0;
let playing=true;

function switchPlayer(){
    document.getElementById(`current--${turn}`).textContent=0;
    document.querySelector(`.player--${turn}`).classList.remove('player--active');
    turn=(turn===1)? 0:1;
    document.querySelector(`.player--${turn}`).classList.add('player--active');
}

btnRoll.addEventListener('click',function(){
if(playing){const randomDice=Math.trunc(Math.random()*6)+1;
dice.src=`dice-${randomDice}.png`;
dice.classList.remove('hidden');
if(randomDice!==1){
    document.getElementById(`current--${turn}`).textContent=Number(document.getElementById(`current--${turn}`).textContent)+randomDice;
    
}else {
    switchPlayer()
}}
}
)

btnHold.addEventListener('click',function(){
    if(playing){scors[turn]+=Number(document.getElementById(`current--${turn}`).textContent);
    document.getElementById(`score--${turn}`).textContent=scors[turn];
    if(scors[turn]>=100) {
        document.querySelector(`.player--${turn}`).classList.add('player--winner');
        playing=false;
        dice.classList.add('hidden');
    }
    else{
        switchPlayer();
    } }   
    }
)

btnNew.addEventListener('click',function(){
    score0El.textContent=0;
    score1El.textContent=0;
    scors[0]=0;
    scors[1]=0;
    document.querySelector(`.player--${turn}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.getElementById(`current--${turn}`).textContent=0;
    turn=0;
    playing=true;
})