/*
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.
*/

'use strict'

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
  const red = 0
  const white = 1

  let indexRed = 0
  let indexWhite = 0
  let indexBlue = nums.length - 1

  while (indexWhite <= indexBlue) {
    const nextColor = nums[indexWhite]

    if (nextColor === red) {
      nums[indexWhite] = nums[indexRed]
      nums[indexRed] = nextColor;
      ++indexRed;
      ++indexWhite
    }
    else if (nextColor === white) {
      ++indexWhite
    }
    else {
      nums[indexWhite] = nums[indexBlue]
      nums[indexBlue] = nextColor;
      --indexBlue
    }
  }
}
