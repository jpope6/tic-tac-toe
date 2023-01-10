// module for gameboard class
const gameboard = (() => {
  let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const container = document.getElementById("board");

  const createBoard = () => {
    for (let i = 0; i < board.length; i++) {
      let row = document.createElement("div");
      for (let j = 0; j < board[i].length; j++) {
        let col = document.createElement("div");
        row.appendChild(col);
      }
      container.appendChild(row);
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
