/*
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,

There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
*/

'use strict'

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
  const n = obstacleGrid.length
  const m = obstacleGrid[0].length

  obstacleGrid[0][0] = (obstacleGrid[0][0] === 0) ? 1 : 0

  for (let i = 1; i < n; ++i) {
    obstacleGrid[i][0] =  (obstacleGrid[i][0] === 1) ? 0 : obstacleGrid[i - 1][0]
  }

  for (let i = 1; i < m; ++i) {
    obstacleGrid[0][i] =  (obstacleGrid[0][i] === 1) ? 0 : obstacleGrid[0][i - 1]
  }

  for (let i = 1; i < n; ++i) {
    for (let j = 1; j < m; ++j) {
      obstacleGrid[i][j] = (obstacleGrid[i][j] === 1) ? 0 : (obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1])
    }
  }

  return obstacleGrid[n - 1][m - 1]
}
