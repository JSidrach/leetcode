/*
Given an integer, write an algorithm to convert it to hexadecimal.
For negative integer, two’s complement method is used.

Note:
   All letters in hexadecimal (a-f) must be in lowercase.
   The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
   The given number is guaranteed to fit within the range of a 32-bit signed integer.
   You must not use any method provided by the library which converts/formats the number to hex directly.
*/

'use strict'

/**
 * @param {number} num
 * @return {string}
 */
const toHex = function(num) {
  if (num === 0) {
    return '0'
  }

  const ascii0 = '0'.charCodeAt(0)
  const asciiA = 'a'.charCodeAt(0)
  const digit2ascii = function(n) {
    return (n > 9) ? String.fromCharCode(asciiA + (n % 10)) : String.fromCharCode(ascii0 + n)
  }

  const neg = num < 0
  if (neg) {
    num += Math.pow(2, 32)
  }

  let output = ''
  while (num > 0) {
    output = digit2ascii(num % 16) + output
    num = Math.floor(num / 16)
  }

  return output
}
