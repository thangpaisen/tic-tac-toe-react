import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import { getAIMove } from './utils/aiLogic';
import './styles/App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameMode, setGameMode] = useState('human'); // 'human' or 'ai'
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'
  const [isAIThinking, setIsAIThinking] = useState(false);

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
    if (calculateWinner(squares) || squares[i] || isAIThinking) {
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
    setIsAIThinking(false);
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
    resetGame();
  };

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    resetGame();
  };

  // AI move logic
  useEffect(() => {
    if (gameMode === 'ai' && !xIsNext && !calculateWinner(squares) && !isAIThinking) {
      const hasEmptySquares = squares.some(square => square === null);
      if (hasEmptySquares) {
        setIsAIThinking(true);
        // Add delay to make AI move feel more natural
        setTimeout(() => {
          const aiMove = getAIMove(squares, difficulty, 'O');
          if (aiMove !== null) {
            const newSquares = squares.slice();
            newSquares[aiMove] = 'O';
            setSquares(newSquares);
            setXIsNext(true);
          }
          setIsAIThinking(false);
        }, 500);
      }
    }
  }, [squares, xIsNext, gameMode, difficulty, isAIThinking]);

  const winner = calculateWinner(squares);
  const isBoardFull = squares.every(square => square !== null);
  
  let status;
  if (winner) {
    if (gameMode === 'ai') {
      status = `🎉 ${winner.winner === 'X' ? 'You Win!' : 'AI Wins!'}`;
    } else {
      status = `🎉 Winner: ${winner.winner}`;
    }
  } else if (isBoardFull) {
    status = "🤝 It's a draw!";
  } else {
    if (gameMode === 'ai') {
      if (isAIThinking) {
        status = "🤖 AI is thinking...";
      } else {
        status = `${xIsNext ? 'Your turn (X)' : 'AI turn (O)'}`;
      }
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  }

  return (
    <div className="app">
      <div className="game-container">
        <h1>🎮 Tic Tac Toe</h1>
        
        <div className="game-controls">
          <div className="game-mode">
            <label>Game Mode:</label>
            <button 
              className={`mode-button ${gameMode === 'human' ? 'active' : ''}`}
              onClick={() => handleGameModeChange('human')}
            >
              👥 Human vs Human
            </button>
            <button 
              className={`mode-button ${gameMode === 'ai' ? 'active' : ''}`}
              onClick={() => handleGameModeChange('ai')}
            >
              🤖 Human vs AI
            </button>
          </div>
          
          {gameMode === 'ai' && (
            <div className="difficulty">
              <label>Difficulty:</label>
              <button 
                className={`difficulty-button ${difficulty === 'easy' ? 'active' : ''}`}
                onClick={() => handleDifficultyChange('easy')}
              >
                😊 Easy
              </button>
              <button 
                className={`difficulty-button ${difficulty === 'medium' ? 'active' : ''}`}
                onClick={() => handleDifficultyChange('medium')}
              >
                😐 Medium
              </button>
              <button 
                className={`difficulty-button ${difficulty === 'hard' ? 'active' : ''}`}
                onClick={() => handleDifficultyChange('hard')}
              >
                😤 Hard
              </button>
            </div>
          )}
        </div>
        
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
          <p>
            {gameMode === 'ai' 
              ? "You are X, AI is O. Click on any square to place your mark!" 
              : "Click on any square to place your mark!"
            }
          </p>
          <p>Get three in a row to win! 🏆</p>
        </div>
      </div>
    </div>
  );
}

export default App;