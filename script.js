let des = document.querySelector(".des")
let start = document.querySelector(".start")
let win = document.querySelector(".win")

var one = document.querySelector(".one")
var two = document.querySelector(".two")
var three = document.querySelector(".three")
var four = document.querySelector(".four")
var five = document.querySelector(".five")
var six = document.querySelector(".six")
var seven = document.querySelector(".seven")
var eight = document.querySelector(".eight")
var nine = document.querySelector(".nine")

let block = document.querySelectorAll(".blocks");
let turns = 0;
var flag = 0;
var won = 0;
var current;

function startgame(){
      
    turns = 0;
    win.style.display = "none";

    des.innerHTML = "Player X's turn"
    start.innerHTML = "Restart the game";

    Array.from(block).forEach((blocks)=>{
        blocks.innerHTML="";
        blocks.classList.remove("win_indicator");
        blocks.style.cursor = "pointer";
          }) 
    
   
    des.style.display = "block";

Array.from(block).forEach((blocks)=>{
blocks.addEventListener("click",(e)=>{

    if(blocks.innerHTML=="")
    turns = turns+1;
    // e.style.cursor="none"
    
    if(flag==0 && blocks.innerHTML==""){
        des.innerHTML = "Player O's turn"
        current = "X";
        blocks.innerHTML = "X"
        flag = 1;
    }

    else if(flag==1 && blocks.innerHTML==""){
        des.innerHTML = "Player X's turn"
        blocks.innerHTML = "O";
        current = "O";
        flag = 0;
    }

     blocks.style.cursor="no-drop"
    //  blocks.disabled = true;
    //  e.disabled = true;

check(current)

    if(won==0){
    if(turns==9){
        win.innerHTML = "Match drawn!, Please restart the game"
        win.style.display = "block";
        draw()
    }
}
    e.stopImmediatePropagation()
})

function draw(){
    des.style.display = "none"; 
    win.classList.add("description");  
    Array.from(block).forEach((element)=>{
          element.style.cursor = "none";
    })
}

})
}

function win_already(symbol,a,b,c){
    Array.from(block).forEach((element)=>{
        element.style.cursor = "none";

    
        if(element==a || element==b || element==c){
            element.classList.add("win_indicator");
        }
  })
   
    won = 1;
    win.style.display = "block";
    win.innerHTML = 'Player ' + symbol + "won! Please restart the game" 
    des.style.display = "none";
    win.classList.add("description");
}

function check(symbol){

if(one.innerHTML==symbol&& four.innerHTML==symbol && seven.innerHTML==symbol){
    console.log("working")
    win_already(symbol,one,four,seven);
}

else if(one.innerHTML==symbol && two.innerHTML==symbol && three.innerHTML==symbol){
   win_already(symbol,one,two,three)
}

else if(two.innerHTML==symbol && five.innerHTML==symbol && eight.innerHTML==symbol){
   win_already(symbol,five,two,eight)
}

else if(five.innerHTML==symbol && four.innerHTML==symbol && six.innerHTML==symbol){
    win_already(symbol,five,four,six)
}

else if(eight.innerHTML==symbol && nine.innerHTML==symbol && seven.innerHTML==symbol){
    win_already(symbol,eight,nine,seven)
}

else if(three.innerHTML==symbol && nine.innerHTML==symbol && six.innerHTML==symbol){
    win_already(symbol,nine,six,three)
}

else if(one.innerHTML==symbol && nine.innerHTML==symbol && five.innerHTML==symbol){
    win_already(symbol,one,nine,five)
}

else if(three.innerHTML==symbol && five.innerHTML==symbol && seven.innerHTML==symbol){
    win_already(symbol,seven,five,three)
}
}

start.addEventListener("click",()=>{
    flag = 0;
    won = 0;
   startgame();
})


