let a = 0;
let b = 0;
let c = 0;
let opr = "null";
const button = document.querySelector('.inputs')
const displayText = document.querySelector('.display');
button.addEventListener('click', function(event){
    if (event.target.classList[0]==0){
        a=0;
        b=0;
        displayText.innerText  = 0;
    }
    else if (event.target.classList[0] == "number"){
        a = parseInt(event.target.innerText) + a*10;
        displayText.innerText=a;
    }
    else if (event.target.classList[0] === "operators"){
        opr = event.target.classList[1];
        b= a;
        a=0;
        displayText.innerText=event.target.innerText;
        console.log(opr);
    }
    else if (event.target.classList[0] == "equality"){
        if (opr=="add"){
            displayText.innerText=a+b;
            a=a+b;
        }
        else if (opr=="div"){
            displayText.innerText=(b/a).toFixed(4);
            a= b/a;
        }
        else if (opr=="mul"){
            displayText.innerText=a*b;
            a= b*a;
        }
        else if (opr=="min"){
            displayText.innerText=b-a;
            a=b-a;
        }
        else{
            displayText.innerText="Invalid input";
        }
    }
    else if(event.target.classList[0]=='back'){
        a=(a-a%10)/10;
        displayText.innerText=a;
    }
    
});
