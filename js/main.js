	/*----- constants -----*/
// const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const getBoardNumBtn = document.getElementById("spin")
const resetBtn = document.getElementById("reset")


	/*----- state variables -----*/

// document.querySelectorAll(".board").innerHTML = x;

	/*----- cached elements  -----*/


	/*----- event listeners -----*/
spinBtn.addEventListener("click", spin)
resetBtn.addEventListener("click", reset)

	/*----- functions -----*/

// let x = Math.floor(Math.random() * 10); // max 10 
// getRandomNum (() => {
//     value = 10;
// })
function getRandomNum () {
    return Math.floor(Math.random() * 10);
}
function getBoardNum () {
    boardone = getRandomNum();
    boardtwo = getRandomNum();
    boardthree = getRandomNum();
}
