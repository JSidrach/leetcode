/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000

Answer: 1

Example 2:

11000
11000
00100
00011
*/

'use strict'

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  const iLen = grid.length
  if (iLen === 0) {
    return 0
  }

  const jLen = grid[0].length

  const visitIsland = function(i, j) {
    if ((i < 0) || (j < 0) || (i >= iLen) || (j >= jLen) || (grid[i][j] === '0')) {
      return 0
    }

    grid[i][j] = '0'

    visitIsland(i - 1, j)
    visitIsland(i, j + 1)
    visitIsland(i + 1, j)
    visitIsland(i, j - 1)

    return 1
  }

  let total = 0

  for (let i = 0; i < iLen; ++i) {
    for (let j = 0; j < jLen; ++j) {
      total += visitIsland(i, j)
    }
  }

  return total
}
