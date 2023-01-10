// module for gameboard class
const gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const container = document.getElementById("board");

  const createBoard = () => {
    for (let i = 0; i < board.length; i++) {
      let space = document.createElement("div");
      container.appendChild(space);
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
