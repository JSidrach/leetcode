/*
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

'use strict'

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const result = []
  let i = 1
  let prevRow = []

  while (i <= numRows) {
    const row = []

    for (let j = 0; j < i; j++) {
      row.push(((j === 0) || (j === (i - 1))) ? 1 : (prevRow[j - 1] + prevRow[j]))
    }

    result.push(row);
    ++i
    prevRow = row
  }

  return result
}
