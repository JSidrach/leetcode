/*
Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  'use strict';

  if (strs.length === 0) {
    return '';
  }

  let prefix = strs[0];
  let matchLength = prefix.length;

  for (let i = 1; i < strs.length; ++i) {
    const matchString = strs[i];
    let j = 0;

    matchLength = Math.min(matchLength, matchString.length);

    while ((prefix[j] === matchString[j]) && (j < matchLength)) {
      ++j;
    }

    matchLength = j;
  }

  return prefix.substring(0, matchLength);
};
