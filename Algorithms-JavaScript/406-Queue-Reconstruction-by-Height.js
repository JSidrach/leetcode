/*
Suppose you have a random list of people standing in a queue.
Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h.
Write an algorithm to reconstruct the queue.
*/

'use strict'

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function(people) {
  const output = []

  people.sort(function(a, b) {
    return (a[0] === b[0]) ? (a[1] - b[1]) : (b[0] - a[0])
  })

  for (let i = 0; i < people.length; ++i) {
    output.splice(people[i][1], 0, people[i])
  }

  return output
}
