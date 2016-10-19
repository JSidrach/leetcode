/*
Follow up for N-Queens problem.

Now, instead outputting board configurations, return the total number of distinct solutions.
*/

'use strict'

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function(n) {
  const validBoard = function(queens, pos) {
    const queen1 = pos
    const j = queens.length
    for (let i = 0; i < j; ++i) {
      const queen2 = queens[i]
      if ((queen1 === queen2) ||
          ((queen1 - i) === (queen2 - j)) ||
          ((queen1 + i) === (queen2 + j))) {
          return false
      }
    }

    return true
  }

  const nextQueen = function(queens, n, min) {
    for (let i = min; i < n; ++i) {
      if (validBoard(queens, i)) {
        return i
      }
    }

    return -1
  }

  let numSols = 0
  let min = 0
  const board = []

  while (board.length !== 0 || min !== n) {
    if (board.length === n) {
      ++numSols
    }

    const j = nextQueen(board, n, min)
    if (j !== -1) {
      min = 0
      board.push(j)
    }
    else {
      min = board.pop() + 1
    }
  }

  return numSols
}
