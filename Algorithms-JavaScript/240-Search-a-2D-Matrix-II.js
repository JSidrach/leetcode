/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    Integers in each row are sorted in ascending from left to right.
    Integers in each column are sorted in ascending from top to bottom.

For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

Given target = 5, return true.

Given target = 20, return false.
*/

'use strict'

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  const m = matrix.length
  if (m === 0) {
    return false
  }
  const n = matrix[0].length

  let row = 0
  let column = n - 1

  while ((row < m) && (column >= 0)) {
    const num = matrix[row][column]
    if (num < target) {
      ++row
    }
    else if (num > target) {
      --column
    }
    else {
      return true
    }
  }

  return false
}
