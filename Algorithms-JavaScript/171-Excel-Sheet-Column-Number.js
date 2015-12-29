/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  'use strict';

  let column = 0;
  const base = 'A'.charCodeAt(0) - 1;
  const numCharacters = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

  for (let i = s.length - 1, exp = 1; i >= 0; --i, exp *= numCharacters) {
    column += (s.charCodeAt(i) - base) * exp;
  }

  return column;
};
