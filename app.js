let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newbtn= document.querySelector("#newgame-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let draw=document.querySelector(".draw");

let turnO=true; //playerX, player0

const winPatterns=[
    [0, 1,2],
    [0, 3,6],
    [0, 4,8],
    [1, 4,7],
    [2, 5,8],
    [2, 4,6],
    [3, 4,5],
    [6, 7,8],
];
 
const resetgame =()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
const count= ()=>{
    if(click===9){
        
    }
}



boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText ="X";
            turnO=true;
        }
        box.Disabled= true;
        checkWinner();
    });
});



const disableboxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
       
       let pos1val= boxes[pattern[0]].innerText;
       let pos2val= boxes[pattern[1]].innerText;
       let pos3val= boxes[pattern[2]].innerText;

       if(pos1val !=""&& pos2val != ""&&pos3val !=""){
        if(pos1val===pos2val && pos2val===pos3val){
            
            showWinner(pos1val);
        }
       }
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);