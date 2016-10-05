/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

'use strict'

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const input = s.split('')
  const stack = []

  while (input.length !== 0) {
    const next = input.shift()

    if ((next === '(') || (next === '{') || (next === '[')) {
      stack.push(next)
    }
    else {
      if (stack.length === 0) {
        return false
      }

      switch (stack.pop()) {
        case '(':
          if (next !== ')') {
            return false
          } break

        case '{':
          if (next !== '}') {
            return false
          } break

        case '[':
          if (next !== ']') {
            return false
          } break

      }
    }
  }

  return (stack.length === 0)
}
