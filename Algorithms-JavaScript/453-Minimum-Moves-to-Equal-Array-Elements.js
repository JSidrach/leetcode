/*
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function(nums) {
  const l = nums.length

  let min = Infinity
  const sum = nums.reduce(function(a, b) {
    min = Math.min(min, b)

    return a + b
  }, 0)

  return sum - l * min
}
