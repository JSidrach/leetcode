/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

Follow up:
Did you use extra space?
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

'use strict'

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
  const rows = matrix.length
  if (rows === 0) {
    return
  }

  const columns = matrix[0].length

  let firstRowZero = false
  let firstColZero = false

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      if (matrix[i][j] === 0) {
        if (i === 0) {
          firstRowZero = true
        }

        if (j === 0) {
          firstColZero = true
        }

        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }

  for (let i = 1; i < rows; ++i) {
    for (let j = 1; j < columns; ++j) {
      if (matrix[0][j] === 0 || (matrix[i][0] === 0)) {
        matrix[i][j] = 0
      }
    }
  }

  if (firstRowZero) {
    for (let j = 0; j < columns; ++j) {
      matrix[0][j] = 0
    }
  }

  if (firstColZero) {
    for (let i = 0; i < rows; ++i) {
      matrix[i][0] = 0
    }
  }
}
