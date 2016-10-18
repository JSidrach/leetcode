/*
Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number).
Given some queries, return the answers. If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations.
Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ].

The input is always valid.
You may assume that evaluating the queries will result in no division by zero and there is no contradiction.
*/

'use strict'

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function(equations, values, queries) {
  const solveQuery = function(numerator, denominator, f, eqs, visited) {
    const noSolution = -1.0
    if ((typeof eqs[numerator] === 'undefined') ||
        (typeof eqs[denominator] === 'undefined') ||
        (visited.has(numerator))) {
      return noSolution
    }

    if (numerator === denominator) {
      return f
    }

    if (typeof eqs[numerator][denominator] !== 'undefined') {
      return f * eqs[numerator][denominator]
    }

    visited.add(numerator)

    const denominators = eqs[numerator]
    const ds = Object.keys(denominators)
    for (let i = 0; i < ds.length; ++i) {
      const sol = solveQuery(ds[i], denominator, f * denominators[ds[i]], eqs, visited)
      if (sol !== noSolution) {
        return sol
      }
    }

    return noSolution
  }

  const eqs = {}
  for (let i = 0; i < equations.length; ++i) {
    const eq = equations[i]
    const numerator = eq[0]
    const denominator = eq[1]
    const f = values[i]

    if (typeof eqs[numerator] === 'undefined') {
      eqs[numerator] = {}
    }
    if (typeof eqs[denominator] === 'undefined') {
      eqs[denominator] = {}
    }

    eqs[numerator][denominator] = f
    eqs[denominator][numerator] = 1.0 / f
  }

  const sols = []
  queries.forEach(function(q) {
    sols.push(solveQuery(q[0], q[1], 1.0, eqs, new Set()))
  })

  return sols
}
