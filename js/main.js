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


	/*----- event listeners -----*/
getBoardNumBtn.addEventListener("click", spin)
resetBtn.addEventListener("click", reset)

	/*----- functions -----*/
function getRandomNum () {
        return Math.floor(Math.random() * 10);
}

function getBoardNum () {
        boardone = getRandomNum();
        boardtwo = getRandomNum();
        boardthree = getRandomNum();
}

function updateBoard() {
    boardOneEl.textContent = boardone;
    boardTwoEl.textContent = boardtwo;
    boardThreeEl.textContent = boardthree;
}

function spin() {
    getBoardNum();
    updateBoard();
}

function reset() {
   boardone = boardtwo = boardthree = 0;
   updateBoard();
}

// Initial board update
updateBoard();
