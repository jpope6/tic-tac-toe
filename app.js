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

    checkWinner();
  };

  const checkWinner = () => {
    // check rows
    for (let i = 0; i < 9; i += 3) {
      if (
        board[i] &&
        board[i] == board[i + 1] &&
        board[i + 1] == board[i + 2]
      ) {
        playerTurn.innerHTML = "WINNER";
        return;
      }
    }

    // check cols
    for (let i = 0; i < 3; i++) {
      if (
        board[i] &&
        board[i] == board[i + 3] &&
        board[i + 3] == board[i + 6]
      ) {
        playerTurn.innerHTML = "WINNER";
        return;
      }
    }

    // check diagonals
    if (
      (board[0] == board[4] && board[4] == board[8]) ||
      (board[2] == board[4] && board[4] == board[6])
    ) {
      // make sure that it is not announcing winner when all spaces are empty
      if (board[4]) {
        playerTurn.innerHTML = "WINNER";
        return;
      }
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
