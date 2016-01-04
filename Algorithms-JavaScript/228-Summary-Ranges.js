/*
Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  'use strict';

  if (nums.length === 0) {
    return [];
  }

  const length = nums.length;
  let ranges = [];
  let start = nums[0];
  let prev = start;

  nums.forEach(function(num) {
    if (num > (prev + 1)) {
      if (prev !== start) {
        ranges.push(start + '->' + prev);
      }
      else {
        ranges.push(start.toString());
      }

      start = num;
    }

    prev = num;
  });

  const last = nums[length - 1];
  if (start !== last) {
    ranges.push(start + '->' + last);
  }
  else {
    ranges.push(last.toString());
  }

  return ranges;
};
