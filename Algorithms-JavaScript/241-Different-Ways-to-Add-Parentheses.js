/*
Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.

Example 1

Input: "2-1-1".

((2-1)-1) = 0
(2-(1-1)) = 2

Output: [0, 2]

Example 2

Input: "2*3-4*5"

(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10

Output: [-34, -14, -10, -10, 10]
*/

'use strict'

/**
 * @param {string} input
 * @return {number[]}
 */
const diffWaysToCompute = function(input) {
  const parseInput = function(s) {
    const parsedS = []
    let n = 0

    for (let i = 0; i < s.length; ++i) {
      const c = s[i]
      if ((c >= '0') && (c <= '9')) {
        n = (10 * n) + (c - '0')
      }
      else {
        parsedS.push(n)
        parsedS.push(c)
        n = 0
      }
    }
    parsedS.push(n)

    return parsedS
  }

  const reduce = function(n1, op, n2) {
    if (op === '+') {
      return n1 + n2
    }

    if (op === '-') {
      return n1 - n2
    }

    return n1 * n2
  }

  const seq = parseInput(input)

  const combinations = function(low, high) {
    if (low === high) {
      return [seq[low]]
    }

    const output = []
    for (let i = low; i < high - 1; i += 2) {
      const left = combinations(low, i)
      const right = combinations(i + 2, high)
      for (let l = 0; l < left.length; ++l) {
        for (let r = 0; r < right.length; ++r) {
          output.push(reduce(left[l], seq[i + 1], right[r]))
        }
      }
    }

    return output
  }

  return combinations(0, seq.length - 1)
}
