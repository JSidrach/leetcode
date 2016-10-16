/*
A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.

For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

Example:

Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]

Note:
    The order of output does not matter.
    The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
    The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
*/

'use strict'

/**
 * @param {number} num
 * @return {string[]}
 */
const readBinaryWatch = function(num) {
  const generateCombinations = function(nums, n, min) {
    if (n > nums.length - min) {
      return []
    }

    if (n === 0) {
      return [0]
    }

    if (n === 1) {
      return nums.slice(min)
    }

    const used = nums[min]
    const rest = generateCombinations(nums, n - 1, min + 1).map((n) => n + used)

    return generateCombinations(nums, n, min + 1).concat(rest)
  }

  const numbers = generateCombinations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], num, 0)
  const times = numbers.filter(function(n) {
    const hours = Math.floor(n / 64)
    const minutes = n % 64

    return ((hours < 12) && (minutes < 60))
  }).map(function(n) {
    const hours = Math.floor(n / 64)
    const minutes = n % 64

    return hours + ':' + ('0' + minutes).slice(-2)
  })

  return times
}
