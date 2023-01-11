// module for gameboard class
const gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let turn = "X";

  const container = document.getElementById("board");
  let playerTurn = document.getElementById("playerTurn");
  let resetButton = document.getElementById("reset");

  resetButton.addEventListener("click", () => resetBoard());

  // dictionary maps index in array to corresponding div
  let dict = {};

  const createBoard = () => {
    for (let i = 0; i < board.length; i++) {
      let space = document.createElement("div");
      space.addEventListener("click", () => takeTurn(i));
      container.appendChild(space);
      dict[i] = space;
    }
  };

  // draw X or O in space and change turn to next player
  const takeTurn = (index) => {
    if (dict[index].textContent) {
      return;
    }

    dict[index].textContent = turn;
    board[index] = turn;
    if (turn == "X") {
      turn = "O";
      playerTurn.innerHTML = "Player O's Turn";
    } else {
      turn = "X";
      playerTurn.innerHTML = "Player X's Turn";
    }
  };

  // reset button will clear the board
  const resetBoard = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
      dict[i].textContent = "";
      turn = "X";
      playerTurn.innerHTML = "Player X's Turn";
    }
  };

  return { board, createBoard };
})();

gameboard.createBoard();

// factory function for player class
const Player = (symbol) => {
  const getSymbol = () => symbol;
  return { symbol };
};
