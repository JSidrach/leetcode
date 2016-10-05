/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/

'use strict'

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  const states = new Array(m).fill(new Array(1).fill(1))
  states[0] = new Array(n).fill(1)

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      states[i][j] = states[i - 1][j] + states[i][j - 1]
    }
  }

  return states[m - 1][n - 1]
}
