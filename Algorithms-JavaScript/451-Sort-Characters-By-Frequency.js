/*
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

'use strict'

/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function(s) {
  const m = {}
  for (const c of s) {
    if (typeof m[c] === 'undefined') {
      m[c] = 1
    }
    else {
      ++m[c]
    }
  }

  const ns = Object.keys(m).reduce((t, k) => [...t, [k, m[k]]], [])
  ns.sort((a, b) => b[1] - a[1])

  return ns.reduce((str, p) => str + (p[0].repeat(p[1])), '')
}
