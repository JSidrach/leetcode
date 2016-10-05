/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

'use strict'

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows === 1) {
    return s
  }

  let result = ''
  const length = s.length

  for (let i = 0; i < numRows; ++i) {
    const stepA = (numRows - i - 1) * 2
    const stepB = i * 2
    let index = i
    let flag = true

    if (index < length) {
      result += s[index]
    }

    while (index < length) {
      const step = flag ? stepA : stepB
      flag = !flag
      index += step

      if ((step !== 0) && (index < length)) {
        result += s[index]
      }
    }
  }

  return result
}
