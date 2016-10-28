/*
Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:

Input:
3

Output:
3

Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
*/

'use strict'

/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function(n) {
  let base = 1
  let digits = 1
  let used = 9

  while (n > used) {
    n -=  used
    base *= 10
    ++digits
    used = 9 * base * digits
  }

  const num = base + (n - 1) / digits

  return num.toString()[(n - 1) % digits] - '0'
}
