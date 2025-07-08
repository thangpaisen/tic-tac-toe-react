# 🎮 Tic Tac Toe React

A modern, beautiful Tic Tac Toe game built with React.js, featuring a clean UI, smooth animations, and responsive design.

![Tic Tac Toe Game](https://github.com/user-attachments/assets/371ffbb3-32ac-47c5-a5c9-7f6efae4d664)

## ✨ Features

- 🎯 **Classic Tic Tac Toe gameplay** - Two players take turns placing X's and O's
- 🤖 **AI opponent with difficulty levels** - Play against computer with Easy, Medium, or Hard difficulty
- 🏆 **Win detection** - Automatically detects winning combinations and highlights them
- 🤝 **Draw detection** - Recognizes when the game ends in a tie
- 🔄 **Reset functionality** - Start a new game with the click of a button
- 📱 **Responsive design** - Works perfectly on desktop and mobile devices
- 🎨 **Beautiful UI** - Modern gradient backgrounds and smooth animations
- ⚡ **Fast performance** - Built with React 18 for optimal performance
- 🌈 **Visual feedback** - Hover effects and winning square animations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thangpaisen/tic-tac-toe-react.git
cd tic-tac-toe-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎮 How to Play

1. **Choose game mode** - Select between "Human vs Human" or "Human vs AI"
2. **Select difficulty** (AI mode only) - Choose Easy, Medium, or Hard
3. **Start the game** - Player X goes first (you play as X against AI)
4. **Click on any square** to place your mark
5. **Take turns** - Players alternate between X and O (or wait for AI response)
6. **Win the game** - Get three of your marks in a row (horizontally, vertically, or diagonally)
7. **Reset anytime** - Click the "🔄 New Game" button to start over

### AI Difficulty Levels

- **😊 Easy** - AI makes random moves, perfect for beginners
- **😐 Medium** - AI uses basic strategy (tries to win, blocks opponent)
- **😤 Hard** - AI uses minimax algorithm for optimal play, very challenging!

## 🏗️ Project Structure

```
tic-tac-toe-react/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Board.js        # Game board component
│   │   └── Square.js       # Individual square component
│   ├── styles/
│   │   └── App.css         # Application styles
│   ├── utils/
│   │   └── aiLogic.js      # AI algorithms for different difficulty levels
│   ├── App.js              # Main application component
│   └── index.js            # Application entry point
├── package.json            # Project dependencies and scripts
└── README.md              # Project documentation
```

## 🛠️ Built With

- **React 18.2.0** - A JavaScript library for building user interfaces
- **React Scripts 5.0.1** - Create React App build tools
- **Modern CSS** - Custom styling with gradients, animations, and responsive design
- **HTML5** - Semantic markup structure

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🎨 Design Features

- **Gradient backgrounds** - Beautiful purple gradient backdrop
- **Card-based layout** - Clean white game container with rounded corners
- **Smooth animations** - Hover effects and winning square pulsing animation
- **Modern typography** - Clean, readable fonts with proper spacing
- **Responsive breakpoints** - Optimized for mobile devices
- **Visual feedback** - Clear indication of game state and player turns

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📋 Future Enhancements

- [ ] Add game statistics tracking
- [x] Implement AI opponent with difficulty levels
- [ ] Add sound effects and music
- [ ] Create tournament mode for multiple rounds
- [ ] Add player name customization
- [ ] Implement online multiplayer functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**thangpaisen** - [GitHub Profile](https://github.com/thangpaisen)

## 🙏 Acknowledgments

- Inspired by the classic Tic Tac Toe game
- Built with React.js best practices
- Designed with modern UI/UX principles

---

⭐ If you found this project helpful, please give it a star on GitHub!
