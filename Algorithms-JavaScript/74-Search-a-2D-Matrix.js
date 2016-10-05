/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
Given target = 3, return true.
*/

'use strict'

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  const rows = matrix.length
  if (rows === 0) {
    return false
  }

  const columns = matrix[0].length
  let lower = 0
  let upper = rows * columns

  while (lower < upper) {
    const middle = lower + Math.floor((upper - lower) / 2)
    const num = matrix[Math.floor(middle / columns)][middle % columns]

    if (target === num) {
      return true
    }
    else if (target > num) {
      lower = middle + 1
    }
    else {
      upper = middle
    }
  }

  return false
}
