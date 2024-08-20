let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#User-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const ran=Math.floor(Math.random()*3);
    return options[ran];
};

const drawgame=()=>{
    msg.innerText="Game was draw . Play Again.";
    msg.style.backgroundColour="#00ffff";
};

const showwinnner=(userwin,userchoice,compchoice)=>{
   if(userwin)
   {
    userScore++;
    userscorepara.innerText=userScore;
    msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColour="green";
   }
   else
   {
    compScore++;
    compscorepara.innerText=compScore;
    msg.innerText = `You lost. ${compchoice} beat you ${userchoice}.`;
    msg.style.backgroundColour="red";
   }
};

const playgame=(userchoice)=>{
    const compchoice=gencompchoice();

    if(userchoice===compchoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="Rock")
        {
            userwin=compchoice==="Paper"?false:true;
        }
        else if(userchoice==="Paper")
        {
            userwin=compchoice==="Scissors"?false:true;
        }
        else
        {
            userwin=compchoice==="Rock"?false:true;
        }
    showwinnner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
  });
});