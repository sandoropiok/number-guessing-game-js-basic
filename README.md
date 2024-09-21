# 🎯 Number Guessing Game

A simple command-line game built with JavaScript where the player tries to guess a randomly generated number within a specified range. The game provides feedback on whether the guess is too high or too low and continues until the correct number is guessed.

## 🔧 Technologies Used
- **JavaScript**
- **Node.js**
- **readline-sync** for user input handling

## 🚀 How It Works

- The game randomly selects a number between 1 and 100.
- The player enters their guess, and the game responds with:
  - **"Too low!"** if the guess is smaller than the correct number.
  - **"Too high!"** if the guess is larger than the correct number.
  - **"Congratulations!"** when the player guesses the correct number.

## 🛠️ Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sandoropiok/number-guessing-game-js-basic.git
   ```
2. Navigate to the project folder:
   ```bash
   cd number-guessing-game
   ```
3. Install the required dependencies:
   ```bash
   npm instal readline-sync
   ```
4. Run the game:
   ```bash
   node mini-game.js
   ```

## 🎮 How to Play

1. Start the game and follow the prompt to enter your guess.
2. After each guess, you'll receive feedback on whether your guess was too high, too low, or correct.
3. Keep guessing until you find the correct number!
