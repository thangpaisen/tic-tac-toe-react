import React, { useState } from 'react';
import Board from './components/Board';
import './styles/App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  const isBoardFull = squares.every(square => square !== null);
  
  let status;
  if (winner) {
    status = `🎉 Winner: ${winner.winner}`;
  } else if (isBoardFull) {
    status = "🤝 It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="app">
      <div className="game-container">
        <h1>🎮 Tic Tac Toe</h1>
        <div className="game-status">{status}</div>
        <Board 
          squares={squares} 
          onClick={handleClick}
          winningLine={winner?.line}
        />
        <button className="reset-button" onClick={resetGame}>
          🔄 New Game
        </button>
        <div className="game-info">
          <p>Click on any square to place your mark!</p>
          <p>Get three in a row to win! 🏆</p>
        </div>
      </div>
    </div>
  );
}

export default App;