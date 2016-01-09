/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  'use strict';

  return combineRecursive(n, k, 1);
};

var combineRecursive = function(n, k, min) {
  'use strict';

  if ((n - min + 1) < k) {
    return [];
  }

  let solution = [];

  if (k === 1) {
    for (let i = min; i <= n; ++i) {
      solution.push([i]);
    }
  }
  else {
    for (let i = min; i <= n; ++i) {
      let answer = combineRecursive(n, k - 1, i + 1);

      for (let j = 0; j < answer.length; ++j) {
        solution.push([i].concat(answer[j]));
      }
    }
  }

  return solution;
};
