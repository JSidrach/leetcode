/*
Write a function that takes a string as input and returns the string reversed.
*/

'use strict'

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = function(s) {
  const arr = s.split('')

  for (let i = 0, j = s.length - 1; i < j; ++i, --j) {
    const swap = arr[i]
    arr[i] = arr[j]
    arr[j] = swap
  }

  return arr.join('')
}
