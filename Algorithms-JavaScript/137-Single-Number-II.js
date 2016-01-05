/*
Given an array of integers, every element appears three times except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  'use strict';

  let c1 = 0;
  let c2 = 0;

  nums.forEach(function(c3) {
    const tmp = (~c1 & c2 & c3) | (c1 & ~c2 & ~c3);
    c2 = (~c1 & ~c2 & c3) | (~c1 & c2 & ~c3);
    c1 = tmp;
  });

  return c1 | c2;
};
