// module for gameboard class
const gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let turn = "X";

  const container = document.getElementById("board");

  const createBoard = () => {
    for (let i = 0; i < board.length; i++) {
      let space = document.createElement("div");
      space.addEventListener("click", () => takeTurn(space));
      container.appendChild(space);
    }
  };

  // draw X or O in space and change turn to next player
  const takeTurn = (space) => {
    if (space.textContent) {
      return;
    }

    space.textContent = turn;
    if (turn == "X") {
      turn = "O";
    } else {
      turn = "X";
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
