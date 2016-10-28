/*
Given a non-empty array of integers, return the third maximum number in this array.
If it does not exist, return the maximum number.
The time complexity must be in O(n).

Example 1:

Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.

Example 2:

Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:

Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

*/

'use strict'

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
  let firstMax = -Infinity
  let secondMax = -Infinity
  let thirdMax = -Infinity

  nums.forEach(function(n) {
    if (n > firstMax) {
      thirdMax = secondMax
      secondMax = firstMax
      firstMax = n
    }
    else if ((n > secondMax) && (n !== firstMax)) {
      thirdMax = secondMax
      secondMax = n
    }
    else if ((n > thirdMax) && (n !== firstMax) && (n !== secondMax)) {
      thirdMax = n
    }
  })

  return (thirdMax > -Infinity) ? thirdMax : firstMax
}
