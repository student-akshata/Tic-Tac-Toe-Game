let boxes = document.querySelectorAll(".box");
let resentBtn = document.querySelector("#Reset-button");
let newGameBtn = document.querySelector("#New-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");




let turnO = true;
let count = 0;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const RestGame = () =>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count ++;
         
       let isWinner = checkWinner();
       if (count === 9 && !isWinner){
        GameDraw();
       }
    });
});

const GameDraw =() =>{
msg.innerText =`Game was Draw.`;
msgContainer.classList.remove("hide");
disabledBoxes();
};

const disabledBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for ( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) =>{
    msg.innerText =`Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

};

const checkWinner = () =>{
    for ( let pattern of winpatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
         if(pos1val !="" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }

         }

    }
};
 newGameBtn.addEventListener("click",RestGame);
 resentBtn.addEventListener("click",RestGame);
 
