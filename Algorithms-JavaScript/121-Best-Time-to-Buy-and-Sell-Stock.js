/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
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

  let minBuy = Infinity
  let maxProfit = 0

  prices.forEach(function(price) {
    minBuy = (price < minBuy) ? price : minBuy
    maxProfit = (maxProfit > (price - minBuy)) ? maxProfit : (price - minBuy)
  })

  return maxProfit
}
