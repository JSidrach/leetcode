/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
the contiguous subarray [4,−1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  'use strict';

  let max = -Infinity;
  let current = -Infinity;

  nums.forEach(function(num) {
    current = num + Math.max(0, current);
    max = Math.max(max, current);
  });

  return max;
};
