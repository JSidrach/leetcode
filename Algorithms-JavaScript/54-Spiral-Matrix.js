/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  'use strict';

  if (matrix.length === 0) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;
  const dim = m * n;
  let top = 0;
  let left = 0;
  let right = n - 1;
  let bottom = m - 1;
  let direction = 'right';
  let output = [];

  let j = 0;
  let k = 0;
  for (let i = 1; i <= dim; ++i) {
    output.push(matrix[j][k]);

    if (direction === 'right') {
      if (k === right) {
        ++top;
        direction = 'bottom';
        ++j;
      }
      else {
        ++k;
      }
    }
    else if (direction === 'left') {
      if (k === left) {
        --bottom;
        direction = 'top';
        --j;
      }
      else {
        --k;
      }
    }
    else if (direction === 'bottom') {
      if (j === bottom) {
        --right;
        direction = 'left';
        --k;
      }
      else {
        ++j;
      }
    }
    else {
      if (j === top) {
        ++left;
        direction = 'right';
        ++k;
      }
      else {
        --j;
      }
    }
  }

  return output;
};
