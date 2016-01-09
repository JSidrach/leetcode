/*
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state.

Follow up:
Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  'use strict';

  const rows = board.length;
  if (rows === 0) {
    return false;
  }

  const columns = board[0].length;

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      board[i][j] = saveInfo(board[i][j], i, j, rows, columns, board);
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      board[i][j] = updateInfo(board[i][j]);
    }
  }
};

var saveInfo = function(item, row, column, rows, columns, board) {
  'use strict';

  let numNeighbors = 0;

  for (let i = (row - 1); i <= (row + 1); ++i) {
    for (let j = (column - 1); j <= (column + 1); ++j) {
      if ((i >= 0) && (i < rows) && (j >= 0) && (j < columns) && (!((i === row) && (j === column))) && ((board[i][j] & 1) === 1)) {
        ++numNeighbors;
      }
    }
  }

  return ((numNeighbors << 1) | item);
};

var updateInfo = function(item) {
  'use strict';

  const neighbors = (item >> 1) & 15;

  if ((item & 1) === 1) {
    if ((neighbors < 2) || (neighbors > 3)) {
      return 0;
    }

    return 1;
  }

  return ((neighbors === 3) ? 1 : 0);
};
