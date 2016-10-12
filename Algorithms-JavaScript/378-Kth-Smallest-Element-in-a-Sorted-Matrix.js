/*
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.

Note:
You may assume k is always valid, 1 ≤ k ≤ n2.
*/

'use strict'

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(matrix, k) {
  const n = matrix.length
  const idx = [0]
  let min = Infinity

  while (k > 0) {
    let iMin = -1
    min = Infinity

    for (let i = 0; i < idx.length; ++i) {
      const j = idx[i]
      if (j < n) {
        const curr = matrix[i][j]
        if (curr < min) {
          min = curr
          iMin = i
        }
      }
    }

    const row = iMin + 1
    if ((row < n) && (typeof idx[row] === 'undefined')) {
      idx[row] = 0
    }

    idx[iMin] = idx[iMin] + 1
    --k
  }

  return min
}
