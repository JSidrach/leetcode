/*
Given an integer, write a function to determine if it is a power of two.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  'use strict';

  return (n <= 0) ? false : (((n - 1) & n) === 0);
};
