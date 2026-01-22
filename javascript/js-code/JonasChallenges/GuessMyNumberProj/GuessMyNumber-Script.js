'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=Number(document.querySelector('.score').textContent);
let highScore=Number(document.querySelector('.highscore').textContent);



document.querySelector('.check').addEventListener('click',
    function (){
        const guess=Number(document.querySelector('.guess').value);
        
        if(!guess){
            document.querySelector('.message').textContent='no number entered.❗'
        }else if(guess===secretNumber){
            document.querySelector('.message').textContent='correct number🥳';
            document.querySelector('.number').textContent=secretNumber;
             document.querySelector('body').style.backgroundColor='green';
             document.querySelector('.number').style.width='30rem';
             if(highScore<score){highScore=score;
             document.querySelector('.highscore').textContent=highScore;}
             
        }else if(guess !==secretNumber){
            document.querySelector('.message').textContent='too high'
            if(score>1){
                document.querySelector('.message').textContent=(guess<secretNumber)?'too low':'too high';
                score--;
            document.querySelector('.score').textContent=score;
            }else{
                document.querySelector('.message').textContent='u r looser😂';
                document.querySelector('.score').textContent=0;
            }

        }
    }
    
);
document.querySelector('.again').addEventListener('click',
    function(){
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
        score=20;
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.message').textContent='Start guessing...';
        secretNumber=Math.trunc(Math.random()*20)+1;
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value=null;



    }
)