let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset_btn");
let newgametBtn = document.querySelector("#new_btn");
let msgbox = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let turnO = true;
const Winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disableboxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }

};
const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

};
const resetgame = () => {
    tur0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});


const showWinner = (winner) => {
    msgbox.innerText = `Congratulatins Winner is ${winner} 🎉🥳`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for (let pattern of Winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }

    }
}

ResetBtn.addEventListener("click", resetgame);
newgametBtn.addEventListener("click", resetgame);
