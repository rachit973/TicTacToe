// Filename - App.js

import Board from "./Board";
import Info from "./info";
import "./css/App.css";
import { useState } from "react";

function App() {
  // Creating state variables for reset, winner, and current player
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("Player 1"); // Tracks the current player

  // Function to reset the board
  const resetBoard = () => {
    setReset(true);
    setWinner("");
    setCurrentPlayer("Player 1"); // Reset to Player 1's turn
  };

  // Function to switch turns between Player 1 and Player 2
  const togglePlayer = () => {
    setCurrentPlayer((prevPlayer) =>
      prevPlayer === "Player 1" ? "Player 2" : "Player 1"
    );
  };

  return (
    <div className="App">
      {/* Show the winner's message */}
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        <div className="winner-text">{winner}</div>
        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>

      {/* The board component handles the game logic */}
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
        currentPlayer={currentPlayer}
        togglePlayer={togglePlayer}
      />

      {/* Information about the current player */}
      <Info currentPlayer={currentPlayer} />
    </div>
  );
}

export default App;
