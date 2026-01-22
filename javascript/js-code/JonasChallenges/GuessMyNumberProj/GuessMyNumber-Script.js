'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=Number(document.querySelector('.score').textContent);
let highScore=Number(document.querySelector('.highscore').textContent);

function textContent(className,value){
    document.querySelector(`.${className}`).textContent=value;
}

document.querySelector('.check').addEventListener('click',
    function (){
        const guess=Number(document.querySelector('.guess').value);
        
        if(!guess){
            textContent('message','no number entered.❗')
            
        }else if(guess===secretNumber){
            textContent('message','correct number🥳')
            textContent('number',secretNumber)
             document.querySelector('body').style.backgroundColor='green';
             document.querySelector('.number').style.width='30rem';
             if(highScore<score){highScore=score;
            textContent('highscore',highScore)}
             
        }else if(guess !==secretNumber){
            if(score>1){
                textContent('message',(guess<secretNumber)?'too low':'too high')
                score--;
                textContent('score',score)
            }else{
                textContent('message','u r looser😂')
                textContent('score',0)
            }
        }
    }
    
);
document.querySelector('.again').addEventListener('click',
    function(){
        score=20;
        textContent('score',score)
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem';
        textContent('message','Start guessing...')
        secretNumber=Math.trunc(Math.random()*20)+1;
        textContent('number','?')
        document.querySelector('.guess').value=null;
    }
)