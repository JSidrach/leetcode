/*
Given an 2D board, count how many different battleships are in it.
The battleships are represented with 'X's, empty slots are represented with '.'s.
You may assume the following rules:

You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically.
In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.

Example:

X..X
...X
...X

In the above board there are 2 battleships.

Invalid Example:

...X
XXXX
...X

This is not a valid board - as battleships will always have a cell separating between them.

Your algorithm should not modify the value of the board.
*/

'use strict'

/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = function(board) {
  const ship = 'X'
  let count = 0

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      if ((board[i][j] === ship) &&
         ((i === 0) || (board[i - 1][j] !== ship)) &&
         ((j === 0) || (board[i][j - 1] !== ship))) {
        ++count
      }
    }
  }

  return count
}
