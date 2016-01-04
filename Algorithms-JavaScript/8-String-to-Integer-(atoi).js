/*
Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Requirements for atoi:
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.
*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  'use strict';

  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  const length = str.length;
  let i = 0;
  let num = 0;

  while (str[i] === ' ') {
    ++i;
  }

  let sign = 1;
  if (str[i] === '-') {
    sign = -1;
    ++i;
  }
  else if (str[i] === '+') {
    ++i;
  }

  while ((str[i] >= '0') && (str[i] <= '9') && (i < length)) {
    num = 10 * num + sign * (str[i].charAt(0) - '0'.charAt(0));
    ++i;

    if (num >= INT_MAX) {
      return INT_MAX;
    }

    if (num <= INT_MIN) {
      return INT_MIN;
    }
  }

  return num;
};
