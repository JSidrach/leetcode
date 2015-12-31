/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  'use strict';

  const overflow = 2147483647;
  const xStr = (x > 0) ? x.toString() : (-x).toString();
  let reversed = '';

  for (let i = xStr.length - 1; i >= 0; --i) {
    reversed += xStr[i];
  }

  let reversedNum = parseInt(reversed, 10);
  reversedNum = (reversedNum > overflow) ? 0 : reversedNum;

  return (x > 0) ? reversedNum : -reversedNum;
};
