/*
Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:

Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
*/

'use strict'

/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfBoomerangs = function(points) {
  const dsq = function(a, b) {
    const dx = a[0] - b[0]
    const dy = a[1] - b[1]

    return dx * dx + dy * dy
  }

  const l = points.length
  let t = 0

  for (const p1 of points) {
    const ds = {}

    for (const p2 of points) {
      const d = dsq(p1, p2)

      if (typeof ds[d] !== 'undefined') {
        t += ds[d]
        ++ds[d]
      }
      else {
        ds[d] = 1
      }
    }
  }

  return t * 2
}
