/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

prices = [1, 2, 3, 0, 2]
maxProfit = 3
transactions = [buy, sell, cooldown, buy, sell]
*/

'use strict'

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {

  if (prices.length <= 1) {
    return 0
  }

  let rest = 0
  let bought = -prices[0]
  let sold = -Infinity

  prices.forEach(function(price) {
    const prevSold = sold
    sold = bought + price
    bought = Math.max(bought, rest - price)
    rest = Math.max(rest, prevSold)
  })

  return Math.max(rest, sold)
}
