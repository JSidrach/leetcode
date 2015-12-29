/*
Determine whether an integer is a palindrome. Do this without extra space.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  'use strict';

  if (x < 0) {
    return false;
  }

  const numDigits = Math.floor(Math.log10(x) + 1);
  const numIterations = Math.floor(numDigits / 2);
  let i = 0;

  while (i < numIterations) {
    const left = Math.floor(x / Math.pow(10, numDigits - 2 * i - 1)) % 10;
    const right = x % 10;

    if (left !== right) {
      return false;
    }

    x = Math.floor(x / 10);
    i++;
  }

  return true;
};
