let number=Math.floor(Math.random()*20) + 1;
let score=20;
let highscore=0;



document.querySelector('.check').addEventListener('click' , function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);

    //When there is no input
    if(!guess){   //no input
      document.querySelector('.message').innerHTML='No number!!'  ;

    }
    //When the player wins
    else if(guess===number){
        document.querySelector('.message').innerHTML='Correct guess!!!!';  //correct guess
        document.querySelector('.number').textContent=number;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
         
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;

     }
    }
    //When the guess is too high
    else if(guess>number){
        if(score<1){
            document.querySelector('.message').innerHTML='You lost the game';
        }
       else{ 
        document.querySelector('.message').innerHTML='Too High';
        score--;
        document.querySelector('.score').textContent=score;
       }
       
        
    }
    //When the guess is too low
    else{ 
        if(score<1){
            document.querySelector('.message').innerHTML='You lost the game';
        }
       else{ document.querySelector('.message').innerHTML='Too Low';
        score--;
        document.querySelector('.score').textContent=score;
       }
      
        
    }

    });
    

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    number=Math.floor(Math.random()*20) + 1;
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    });


    
 
