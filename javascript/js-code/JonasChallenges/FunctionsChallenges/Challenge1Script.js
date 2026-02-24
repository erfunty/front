'use strict'

const poll={
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    answers: new Array(4).fill(0),
    displayResults(type){//type=array defult parametr
        if(type==='string'){
            console.log(`Poll results are ${this.answers.toLocaleString()}`);
        } else{
            console.log(this.answers);
        }
    },
    registerNewAnswer(){
        let pol=`${this.question}\n`
        for(const line of this.options){
            pol=pol+`${line}\n`
        }//join('\n')

         let choice=Number(prompt(pol));
        if(choice<=3&&choice>=0){
            this.answers[choice]++;
            this.displayResults.bind(poll,'Array')();
        } 
        else{console.log("it's not a choice")
             this.registerNewAnswer()};
    }
}
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))