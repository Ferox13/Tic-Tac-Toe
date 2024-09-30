let playerTurn;
let endGame = false;
let turnText = document.getElementById("turnText");
let resetBtn = document.getElementById("resetButton");
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const createPlayerTurn = () => {
  let randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) {
    playerTurn = "x";
  } else {
    playerTurn = "o";
  }
  turnText.innerText = `Turno de ${playerTurn}`;
};

createPlayerTurn();

const turnClick = (event) => {
  let clickedBtn = event.target;
  let buttonId = clickedBtn.id;
  let btn = document.getElementById(buttonId);
  if (playerTurn === "o") {
    btn.style.backgroundImage = "url('../resources/imgs/circle.png')";
    btn.disabled = true;
    let boardPos = btn.id.slice(-2);
    boardPos.toString();
    let row = Array.from(boardPos)[0];
    let column = Array.from(boardPos)[1];
    board[parseInt(row)][parseInt(column)] = "o";
  } else if (playerTurn === "x") {
    btn.style.backgroundImage = "url('../resources/imgs/x.png')";
    btn.disabled = true;
    let boardPos = btn.id.slice(-2);
    boardPos.toString();
    let row = Array.from(boardPos)[0];
    let column = Array.from(boardPos)[1];
    board[parseInt(row)][parseInt(column)] = "x";
  }
  CheckWin();
  changePlayerTurn(endGame);
};
let buttons = document.querySelectorAll(".cell");
buttons.forEach((button) => {
  button.addEventListener("click", turnClick);
});

resetBtn.addEventListener("click", () => {
  location.reload();
});

const changePlayerTurn = (endGame) => {
  if (!endGame) {
    if (playerTurn === "x") {
      playerTurn = "o";
    } else {
      playerTurn = "x";
    }
    turnText.innerText = `Turno de ${playerTurn}`;
  }
};
function disableAllButtons() {
  let buttons = document.querySelectorAll(".cell");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
const resetGame = () => {};

function isBoardFull(board) {
  for (let row of board) {
    for (let cell of row) {
      if (cell != "o" || cell != "x") {
        return false;
      }
    }
  }
  return true;
}
const CheckWin = () => {
  //  rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === "x" && board[i][1] === "x" && board[i][2] === "x") {
      turnText.innerText = `El ganador es X`;
      endGame = true;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
    } else if (
      board[i][0] === "o" &&
      board[i][1] === "o" &&
      board[i][2] === "o"
    ) {
      endGame = true;
      turnText.innerText = `El ganador es  O`;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
    }
  }
  //column
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === "x" && board[1][i] === "x" && board[2][i] === "x") {
      turnText.innerText = `El ganador es X`;
      endGame = true;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
    } else if (
      board[i][0] === "o" &&
      board[i][1] === "o" &&
      board[i][2] === "o"
    ) {
      endGame = true;
      turnText.innerText = `El ganador es  O`;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
    }
  }

  //diagonal
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === "x" && board[1][i] === "x" && board[2][i] === "x") {
      turnText.innerText = `El ganador es X`;
      endGame = true;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
    } else if (
      board[i][0] === "o" &&
      board[i][1] === "o" &&
      board[i][2] === "o"
    ) {
      endGame = true;
      turnText.innerText = `El ganador es  O`;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
    }
    if (board[0][0] === "x" && board[1][1] === "x" && board[2][2] === "x") {
      turnText.innerText = `El ganador es X`;
      endGame = true;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
    } else if (
      board[0][0] === "o" &&
      board[1][1] === "o" &&
      board[2][2] === "o"
    ) {
      endGame = true;
      turnText.innerText = `El ganador es O`;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
    }

    if (board[0][2] === "x" && board[1][1] === "x" && board[2][0] === "x") {
      turnText.innerText = `El ganador es X`;
      endGame = true;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
    } else if (
      board[0][2] === "o" &&
      board[1][1] === "o" &&
      board[2][0] === "o"
    ) {
      endGame = true;
      turnText.innerText = `El ganador es O`;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
    }
    if(!endGame && isBoardFull(board)){
      turnText.innerText = `El ganador es O`;
      disableAllButtons();
      resetBtn.removeAttribute("hidden");
      turnText.innerText = `Empate`;
    }
  }
};
