	/*----- constants -----*/
// const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


	/*----- state variables -----*/
let boardone, boardtwo, boardthree; 


	/*----- cached elements  -----*/
const getBoardNumBtn = document.getElementById("spin");
const resetBtn = document.getElementById("reset");
const boardOneEl = document.querySelector(".boardone");
const boardTwoEl = document.querySelector(".boardtwo");
const boardThreeEl = document.querySelector(".boardthree");
const resultTextEl = document.querySelector(".result");


	/*----- event listeners -----*/
getBoardNumBtn.addEventListener("click", spin)
resetBtn.addEventListener("click", reset)

	/*----- functions -----*/
function getRandomNum() {
        return Math.floor(Math.random() * 2);
}

function getBoardNum() {
        boardone = getRandomNum();
        boardtwo = getRandomNum();
        boardthree = getRandomNum();
}

function checkWin() {
    if(boardone === boardtwo && boardtwo === boardthree) {
        return "win";
    } else if (boardone === boardtwo || boardone === boardthree || boardtwo === boardthree) {
        return "close";
    } else {
        return "trying";
    }
}

function updateBoard() {
    boardOneEl.textContent = boardone;
    boardTwoEl.textContent = boardtwo;
    boardThreeEl.textContent = boardthree;
}

function spin() {
    getBoardNum();
    updateBoard();
    const result = checkWin();
    if (result === "win") {
            resultTextEl.textContent = "You Win!";
        } else if (result === "close") {
            resultTextEl.textContent = "Getting close!";
        } else { // === "trying"
            resultTextEl.textContent = "Keep trying";
        } 
    }

function reset() {
   boardone = boardtwo = boardthree = 0;
   updateBoard();
   resultTextEl.textContent = "Welcome!";
}

// Initial board update
updateBoard();

