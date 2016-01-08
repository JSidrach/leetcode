/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1]..
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  'use strict';

  return permutation(nums, 0, nums.length - 1);
};

var permutation = function(nums, i, n) {
  'use strict';

  if (i === n) {
    return [nums.slice()];
  }

  let output = [];

  for (let j = i; j <= n; ++j) {
    const swap = nums[i];
    nums[i] = nums[j];
    nums[j] = swap;
    output.push.apply(output, permutation(nums, i + 1, n));
    nums[j] = nums[i];
    nums[i] = swap;
  }

  return output;
};
