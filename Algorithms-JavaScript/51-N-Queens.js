/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

For example, there exist two distinct solutions to the 4-queens puzzle:

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/

'use strict'

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
  const validBoard = function(queens) {
    for (let i = 0; i < queens.length; ++i) {
      const queen1 = queens[i]

      for (let j = i + 1; j < queens.length; ++j) {
        const queen2 = queens[j]

        if ((queen1 === queen2) ||
           ((queen1 - i) === (queen2 - j)) ||
           ((queen1 + i) === (queen2 + j))) {
          return false
        }
      }
    }

    return true
  }

  const nextQueen = function(queens, n, min) {
    for (let i = min; i < n; ++i) {
      queens.push(i)
      const valid = validBoard(queens)
      queens.pop(i)

      if (valid) {
        return i
      }
    }

    return -1
  }

  const sols = []
  let min = 0
  const board = []

  while (board.length !== 0 || min !== n) {
    if (board.length === n) {
      sols.push(board.slice())
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

  const dots = '.'.repeat(n.length)

  return sols.map(function(s) {
    const b = []
    s.forEach(function(queen) {
      b.push(dots.substr(0, queen) + 'Q' + dots.substr(queen + 1))
    })

    return b
  })
}
