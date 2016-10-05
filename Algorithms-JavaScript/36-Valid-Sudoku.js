/*
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
*/

'use strict'

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  for (let i = 0; i < 9; ++i) {
    const row = [false, false, false, false, false, false, false, false, false]
    const col = [false, false, false, false, false, false, false, false, false]

    for (let j = 0; j < 9; ++j) {
      const itemRow = board[i][j]
      const itemCol = board[j][i]

      if (itemRow !== '.') {
        if (row[itemRow]) {
          return false
        }

        row[itemRow] = true
      }

      if (itemCol !== '.') {
        if (col[itemCol]) {
          return false
        }

        col[itemCol] = true
      }
    }
  }

  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      const block = [false, false, false, false, false, false, false, false, false]

      for (let k = 0; k < 3; ++k) {
        for (let z = 0; z < 3; ++z) {
          const itemBlock = board[3 * i + k][3 * j + z]

          if (itemBlock !== '.') {
            if (block[itemBlock]) {
              return false
            }

            block[itemBlock] = true
          }

        }
      }

    }
  }

  return true
}
