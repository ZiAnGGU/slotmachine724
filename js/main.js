	/*----- constants -----*/
// const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


	/*----- state variables -----*/
let boardone, boardtwo, boardthree; 


	/*----- cached elements  -----*/
const getBoardNumBtn = document.getElementById("spin")
const resetBtn = document.getElementById("reset")

	/*----- event listeners -----*/
getBoardNumBtn.addEventListener("click", spin)
resetBtn.addEventListener("click", reset)

	/*----- functions -----*/

// let x = Math.floor(Math.random() * 10); // max 10 
// getRandomNum (() => {
//     value = 10;
// })
// document.querySelectorAll(".board").innerHTML = x;

function getRandomNum () {
    return Math.floor(Math.random() * 10);
}
function getBoardNum () {
    boardone = getRandomNum();
    boardtwo = getRandomNum();
    boardthree = getRandomNum();
}
