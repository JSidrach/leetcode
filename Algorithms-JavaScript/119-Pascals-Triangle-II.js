/*
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  'use strict';

  let i = 1;
  let prevRow = [];
  let row = [];

  while (i <= (rowIndex + 1)) {
    row = [];

    for (let j = 0; j < i; j++) {
      row.push(((j === 0) || (j === (i - 1))) ? 1 : (prevRow[j - 1] + prevRow[j]));
    }

    ++i;
    prevRow = row;
  }

  return row;
};
