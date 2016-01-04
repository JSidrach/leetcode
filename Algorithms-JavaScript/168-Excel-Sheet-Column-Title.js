/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  'use strict';

  const base = 'A'.charCodeAt(0) - 1;
  const exp = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  let column = '';

  while (n >= 1) {
    column = String.fromCharCode(base + ((n - 1) % exp) + 1) + column;
    n = (n - 1) / exp;
  }

  return column;
};
