/*
Validate if a given string is numeric.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  'use strict';

  let i = 0;
  let j = 0;
  let z = 1;

  while (s[i] === ' ') {
    ++i;
  }

  if ((s[i] === '-') || (s[i] === '+')) {
    ++i;
  }

  while ((s[i] >= '0') && (s[i] <= '9')) {
    ++i;
    ++j;
  }

  if (s[i] === '.') {
    ++i;
  }

  while ((s[i] >= '0') && (s[i] <= '9')) {
    ++i;
    ++j;
  }

  if (s[i] === 'e') {
    ++i;
    z = 0;

    if ((s[i] === '-') || (s[i] === '+')) {
      ++i;
    }

    while ((s[i] >= '0') && (s[i] <= '9')) {
      ++i;
      ++z;
    }
  }

  while (s[i] === ' ') {
    ++i;
  }

  return ((j !== 0) && (z !== 0) && (i === s.length));
};
