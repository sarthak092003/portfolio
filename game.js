const [first,second,third,fourth,fifth,sixth,seventh,eight,ninth]=document.querySelectorAll("li");
let chance =  0;
let score1 = 0;
let score2 = 0;
let win = 0;
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2"); 
const display = document.querySelector("h1");
const button = document.querySelector(".play");
const restart = document.querySelector(".restart");

    console.log(win);
    button.addEventListener("click", function(event){
        if (win ===0){
            if(chance%2===0 && event.target.innerText===""){
                event.target.innerText = "X";
                chance++;
            }
            else if(chance%2!=0 && event.target.innerText===""){
                event.target.innerText = "O";
                chance++;
            }
            if(chance===9){
                display.innerText="Match tied between the players press refresh to start another match";
            }
            horizontal();
            vertical();
            diagnol();
            agian();
        }
    });

function horizontal(){
    if(first.innerText + second.innerText +third.innerText==="XXX" || first.innerText + second.innerText +third.innerText==="OOO"){
        if(first.innerText==="X"){
            display.innerText="Player 1 wins";
            score1++;
            player1.innerText = "player1(X):  " + score1;

        }
        else{
            display.innerText = "Player 2 wins";
            score2++;
            player2.innerText = "player2(O):  " + score2;
        }
        win = 1;
    }
    if(fourth.innerText + fifth.innerText +sixth.innerText==="XXX"||fourth.innerText + fifth.innerText +sixth.innerText==="OOO"){
        if(fourth.innerText==="X"){
            display.innerText="Player 1 wins";
            score1++;
            player1.innerText = "player1(X):  " + score1;

        }
        else{
            display.innerText = "Player 2 wins";
            score2++
            player2.innerText = "player2(O):  " + score2;
        }
        win = 1;
    }
    if (seventh.innerText+eight.innerText+ninth.innerText==="XXX"||seventh.innerText+eight.innerText+ninth.innerText==="OOO"){
        if(seventh.innerText==="X"){
            display.innerText="Player 1 wins";
            score1++;
            player1.innerText = "player1(X):  " + score1;

        }
        else{
            display.innerText = "Player2 wins";
            score2++
            player2.innerText = "player2(O):  " + score2;
        }
        win = 1;
    }
}
function vertical(){
    if(first.innerText + fourth.innerText +seventh.innerText==="XXX" || first.innerText + fourth.innerText +seventh.innerText==="OOO"){
        if(first.innerText==="X"){
            display.innerText="Player-1 wins";
            score1++;
            player1.innerText = "player1(X):  " + score1;

        }
        else{
            display.innerText = "Player-2 wins";
            score2++;
            player2.innerText = "player2(O):  " + score2;
        }
        win = 1;
    }
    if(second.innerText + fifth.innerText +eight.innerText==="XXX"||second.innerText + fifth.innerText +eight.innerText==="OOO"){
        if(second.innerText==="X"){
            display.innerText="Player-1 wins";
            score1++;
            player1.innerText = "player1(X):  " + score1;
            

        }
        else{
            display.innerText = "Player-2 wins";
            score2++;
            player2.innerText = "player2(O):  " + score2;
        }
        win = 1;
    }
    if (third.innerText+sixth.innerText+ninth.innerText==="XXX"||third.innerText+sixth.innerText+ninth.innerText==="OOO"){
        if(third.innerText==="X"){
            display.innerText="Player-1 wins";
            score1++;
            player1.innerText = "player1(X):  " + score1;

        }
        else{
            display.innerText = "Player-2 wins";
            score2++;
            player2.innerText = "player2(O):  " + score2;
        }
        win = 1;
    }
}
function diagnol(){
    if(first.innerText + fifth.innerText +ninth.innerText==="XXX" || first.innerText + fifth.innerText +ninth.innerText==="OOO"){
        if(first.innerText==="X"){
            display.innerText="Player-1 wins";
            score1++;
            player1.innerText = "player1(X):  " + score1;


        }
        else{
            display.innerText = "Player-2 wins";
            score2++;
            player2.innerText = "player2(O):  " + score2;
        }
        win = 1;
    }
    if(third.innerText + fifth.innerText +seventh.innerText==="XXX"||third.innerText + fifth.innerText +seventh.innerText==="OOO"){
        if(third.innerText==="X"){
            display.innerText="Player-1 wins"; 
            score1++;
            player1.innerText = "player1(X):  " + score1;

        }
        else{
            display.innerText = "Player-2 wins";
            score2++;
            player2.innerText = "player2(O):  " + score2;
            
        }
        win = 1;
    }
}
function agian(){
    restart.addEventListener("click",function(){
        chance=0;
        console.log("hello");
        display.innerText="Tic-Tac-Toe";
        console.log(chance);
        first.innerText= "";
        second.innerText= "";
        third.innerText= "";
        fourth.innerText= "";
        fifth.innerText= "";
        sixth.innerText= "";
        seventh.innerText="";
        eight.innerText= "";
        ninth.innerText= "";
        win = 0;
    })
}