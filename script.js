game=document.querySelector(".game");
console.dir(
    game
);

let started=false;
let user_seq=[];
let btns=["pink","blue","green","purple"

];
gameSeq=[];
h2=document.querySelector(
    'h2'
);
level=0
document.addEventListener("keypress",function(){
    if (
        started==false
    ){console.log("game started");
        started=true;
        levelup();
        
            
                

    }})
    
 function levelup(){
level++;
h2.innerText=`level ${level}`;
user_seq=[];
 function btnFlash(btn)
{btn.classList.add("flash");
setTimeout(function ()
{btn.classList.remove("flash"

),7000})};


        randcolor=btns[Math.floor(Math.random()*3)]
        randombtn=document.querySelector(`.${randcolor}`);
    btnFlash(
        randombtn
    );
    gameSeq.push(randcolor);
    console.log(gameSeq);
    // console.log(randcolor);
    // console.log(randombtn);
    let score=document.querySelector('.score');
        score.innerText=`your score is :`
    
}   
function btnPress(){
    let btn=this;
    function userFlash(btn)
{btn.classList.add("userflash");
setTimeout(function ()
{btn.classList.remove("userflash"

),5000})};
    userFlash(btn);
user_color=btn.getAttribute("id");
    user_seq.push(user_color);
    console.log(user_seq);
    console.log(`current level:${level}`)
checkBtns(user_seq.length-1);
}
let allBoxes=document.querySelectorAll('.box');

for(box of allBoxes){
    box.addEventListener("click",btnPress)}


    function checkBtns(idx){
        if (
            user_seq[idx]===gameSeq[idx]
        ){
            console.log("game continued");
        }
        else{
            console.log(
                "over"
            ) ;h2.innerText="game over , you suck";
           goo= document.querySelector('.game');
           goo.style.backgroundColor="darkblue";
           ;
           

            
            
            }if(user_seq.length==gameSeq.length){
                levelup();}
            
            
        
            }
            