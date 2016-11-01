/*
Given a string that consists of only uppercase English letters, you can replace any letter in the string with another letter at most k times.
Find the length of a longest substring containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.

Example 1:

Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

'use strict'

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function(s, k) {
  const letters = {}
  let max = 0
  let maxLetter = 0

  for (let left = 0, right = 0; right < s.length; ++right) {
    const m = s[right]
    if (typeof letters[m] === 'undefined') {
      letters[m] = 0
    }
    ++letters[m]
    maxLetter = Math.max(maxLetter, letters[m])
    while ((right - left + 1 - maxLetter) > k) {
      --letters[s[left++]]
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}
