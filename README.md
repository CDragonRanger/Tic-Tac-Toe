# Tic-Tac-Toe Game

Welcome to the **Tic-Tac-Toe** game! This is a simple browser-based implementation of the classic Tic-Tac-Toe (or Xs and Os) game, where two players take turns marking spaces on a 3x3 grid, aiming to get three in a row.

## Features
- **Two-player mode**: Play as either 'X' or 'O', and take turns marking the grid.
- **Real-time turn switching**: Players are prompted on whose turn it is.
- **Win detection**: Automatically checks for winning combinations and alerts the winner.
- **Draw detection**: Detects when the game ends in a draw and prompts accordingly.
- **Reset feature**: Automatically resets the game after a win or draw.

## How to Play
1. Open the game in a web browser.
2. Click any cell in the grid to make a move.
3. Players alternate between 'X' and 'O'. The game will indicate whose turn it is at the top.
4. The game checks for winning combinations after each turn and announces the winner.
5. If no winning combination is found and all cells are filled, the game results in a draw.
6. After a win or draw, the game resets for a new round.

## Game Logic
The game uses a simple 3x3 grid structure, where the state of each cell is tracked using an array. After each move, the game checks for the following winning conditions:
- Three 'X' or 'O' symbols in a row (horizontally, vertically, or diagonally).

If a winning combination is found, the game announces the winner, otherwise it continues until all cells are filled (resulting in a draw if no winner is found).

## Technologies Used
- **HTML**: For the structure of the game.
- **CSS**: For the styling and layout.
- **JavaScript (jQuery)**: For game logic and interactions.

## Future Enhancements
Some possible improvements:
- Add a single-player mode where the player can play against a simple AI.
- Keep score between rounds.
- Add animation effects for winning moves.

Enjoy playing Tic-Tac-Toe!
