/*
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  'use strict';

  const dim = n * n;
  let matrix = new Array(n).fill().map(() => []);
  let top = 0;
  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let direction = 'right';

  let j = 0;
  let k = 0;
  for (let i = 1; i <= dim; ++i) {
    matrix[j][k] = i;

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

  return matrix;
};
