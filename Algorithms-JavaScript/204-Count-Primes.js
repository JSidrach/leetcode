/*
Count the number of prime numbers less than a non-negative number, n.
*/

'use strict'

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  if (n <= 2) {
    return 0
  }

  const candidates = new Array(n).fill(true)
  let count = 1

  for (let i = 3; i < n; i += 2) {
    if (candidates[i]) {
      for (let j = 2 * i; j < n; j += i) {
        candidates[j] = false
      }

      ++count
    }
  }

  return count
}
