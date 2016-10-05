/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?
*/

'use strict'

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  const n = matrix.length
  const i = 0
  const j = 0

  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      const swap = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = swap
    }
  }

  const mid = n >> 1

  for (let i = 0; i < mid; ++i) {
    for (let j = 0; j < n; ++j) {
      const swap = matrix[j][i]
      matrix[j][i] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = swap
    }
  }
}
