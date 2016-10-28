/*
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down.
You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

nums = [
  [9,9,4],
  [6,6,8],
  [2,1,1]
]

Return 4
The longest increasing path is [1, 2, 6, 9].

Example 2:

nums = [
  [3,4,5],
  [3,2,6],
  [2,2,1]
]

Return 4
The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/

'use strict'

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = function(matrix) {
  if (matrix.length === 0) {
    return 0
  }

  const n = matrix.length
  const m = matrix[0].length

  const cache = Array(n).fill().map(() => Array(m).fill())

  const pathFrom = function(i, j) {
    const c = cache[i][j]
    if (typeof c !== 'undefined') {
      return c
    }

    const num = matrix[i][j]
    const left = (i > 0) ? matrix[i - 1][j] : -Infinity
    const up = (j > 0) ? matrix[i][j - 1] : -Infinity
    const right = (i < (n - 1)) ? matrix[i + 1][j] : -Infinity
    const down = (j < (m - 1)) ? matrix[i][j + 1] : -Infinity

    let total = 0

    if (num < left) {
      total = Math.max(total, pathFrom(i - 1, j))
    }
    if (num < up) {
      total = Math.max(total, pathFrom(i, j - 1))
    }
    if (num < right) {
      total = Math.max(total, pathFrom(i + 1, j))
    }
    if (num < down) {
      total = Math.max(total, pathFrom(i, j + 1))
    }

    cache[i][j] = 1 + total

    return cache[i][j]
  }

  let max = 0
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      max = Math.max(max, pathFrom(i, j))
    }
  }

  return max
}
