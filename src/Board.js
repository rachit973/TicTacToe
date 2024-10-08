import { useState, useEffect } from "react";

function Board({ reset, setReset, winner, setWinner, currentPlayer, togglePlayer }) {
  const [board, setBoard] = useState(Array(9).fill(""));
  
  // Check if someone has won
  const checkWinner = (newBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(`${currentPlayer} wins!`);
        return true;
      }
    }

    return false;
  };

  // Handle player moves
  const handleMove = (index) => {
    if (board[index] !== "" || winner !== "") return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer === "Player 1" ? "X" : "O";
    setBoard(newBoard);

    // Check if current player won
    if (!checkWinner(newBoard)) {
      togglePlayer(); // Change to the other player
    }
  };

  // Reset board when the reset state changes
  useEffect(() => {
    if (reset) {
      setBoard(Array(9).fill(""));
      setReset(false);
    }
  }, [reset, setReset]);

  return (
    <div className="board">
      {board.map((value, index) => (
        <div key={index} className="cell" onClick={() => handleMove(index)}>
          {value}
        </div>
      ))}
    </div>
  );
}

export default Board;
