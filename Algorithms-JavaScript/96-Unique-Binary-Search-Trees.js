/*
Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  'use strict';

  let solutions = [1, 1];

  for (let i = 2; i <= n; ++i) {
    let partial = 0;

    for (let j = i - 1; j >= 0; --j) {
      partial += solutions[j] * solutions[i - j - 1];
    }

    solutions[i] = partial;
  }

  return solutions.pop();
};
