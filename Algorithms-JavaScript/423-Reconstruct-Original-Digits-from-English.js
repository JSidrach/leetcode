/*
Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.

Note:
    Input contains only lowercase English letters.
    Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
    Input length is less than 50,000.

Example 1:

Input: "owoztneoer"

Output: "012"

Example 2:

Input: "fviefuro"

Output: "45"
*/

'use strict'

/**
 * @param {string} s
 * @return {string}
 */
const originalDigits = function(s) {
  const nums = Array(10).fill(0)

  for (let i = 0; i < s.length; ++i) {
    const l = s[i]
    if (l === 'z') {
      ++nums[0]
    }
    else if (l === 'w') {
      ++nums[2]
    }
    else if (l === 'x') {
      ++nums[6]
    }
    else if (l === 's') {
      ++nums[7]
    }
    else if (l === 'g') {
      ++nums[8]
    }
    else if (l === 'u') {
      ++nums[4]
    }
    else if (l === 'f') {
      ++nums[5]
    }
    else if (l === 'h') {
      ++nums[3]
    }
    else if (l === 'i') {
      ++nums[9]
    }
    else if (l === 'o') {
      ++nums[1]
    }
  }

  nums[7] -= nums[6]
  nums[5] -= nums[4]
  nums[3] -= nums[8]
  nums[9] -= nums[8] + nums[5] + nums[6]
  nums[1] -= nums[0] + nums[2] + nums[4]

  let output = ''
  for (let i = 0; i <= 9; ++i) {
    const num = nums[i]
    output += i.toString().repeat(nums[i])
  }

  return output
}
