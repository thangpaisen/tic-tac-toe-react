// AI Logic for Tic Tac Toe with different difficulty levels

// Get available moves (empty squares)
const getAvailableMoves = (squares) => {
  return squares.map((square, index) => square === null ? index : null).filter(val => val !== null);
};

// Check if there's a winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// Check if board is full
const isBoardFull = (squares) => {
  return squares.every(square => square !== null);
};

// Easy AI: Random moves
const easyMove = (squares) => {
  const availableMoves = getAvailableMoves(squares);
  if (availableMoves.length === 0) return null;
  
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};

// Medium AI: Try to win, block opponent, otherwise random
const mediumMove = (squares, aiPlayer = 'O') => {
  const availableMoves = getAvailableMoves(squares);
  if (availableMoves.length === 0) return null;
  
  const humanPlayer = aiPlayer === 'O' ? 'X' : 'O';
  
  // Try to win
  for (let move of availableMoves) {
    const testSquares = [...squares];
    testSquares[move] = aiPlayer;
    if (calculateWinner(testSquares) === aiPlayer) {
      return move;
    }
  }
  
  // Block opponent from winning
  for (let move of availableMoves) {
    const testSquares = [...squares];
    testSquares[move] = humanPlayer;
    if (calculateWinner(testSquares) === humanPlayer) {
      return move;
    }
  }
  
  // Take center if available
  if (availableMoves.includes(4)) {
    return 4;
  }
  
  // Take corners if available
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter(corner => availableMoves.includes(corner));
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }
  
  // Random move
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};

// Hard AI: Minimax algorithm for optimal play
const hardMove = (squares, aiPlayer = 'O') => {
  const availableMoves = getAvailableMoves(squares);
  if (availableMoves.length === 0) return null;
  
  const humanPlayer = aiPlayer === 'O' ? 'X' : 'O';
  
  // Minimax algorithm
  const minimax = (squares, depth, isMaximizing) => {
    const winner = calculateWinner(squares);
    
    if (winner === aiPlayer) return 10 - depth;
    if (winner === humanPlayer) return depth - 10;
    if (isBoardFull(squares)) return 0;
    
    if (isMaximizing) {
      let maxEval = -Infinity;
      for (let move of getAvailableMoves(squares)) {
        const testSquares = [...squares];
        testSquares[move] = aiPlayer;
        const evalScore = minimax(testSquares, depth + 1, false);
        maxEval = Math.max(maxEval, evalScore);
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let move of getAvailableMoves(squares)) {
        const testSquares = [...squares];
        testSquares[move] = humanPlayer;
        const evalScore = minimax(testSquares, depth + 1, true);
        minEval = Math.min(minEval, evalScore);
      }
      return minEval;
    }
  };
  
  let bestMove = availableMoves[0];
  let bestValue = -Infinity;
  
  for (let move of availableMoves) {
    const testSquares = [...squares];
    testSquares[move] = aiPlayer;
    const moveValue = minimax(testSquares, 0, false);
    
    if (moveValue > bestValue) {
      bestMove = move;
      bestValue = moveValue;
    }
  }
  
  return bestMove;
};

// Main AI move function
export const getAIMove = (squares, difficulty = 'medium', aiPlayer = 'O') => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return easyMove(squares);
    case 'medium':
      return mediumMove(squares, aiPlayer);
    case 'hard':
      return hardMove(squares, aiPlayer);
    default:
      return mediumMove(squares, aiPlayer);
  }
};

// Export individual difficulty functions for testing
export { easyMove, mediumMove, hardMove };