/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

'use strict'

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n <= 2) {
    return n
  }

  const stairs = [1, 2]

  for (let i = 2; i < n; ++i) {
    stairs[2] = stairs[1] + stairs[0]
    stairs[0] = stairs[1]
    stairs[1] = stairs[2]
  }

  return stairs[2]
}
