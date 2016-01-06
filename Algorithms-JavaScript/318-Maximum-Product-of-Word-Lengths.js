/*
Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:
Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
Return 16
The two words can be "abcw", "xtfn".

Example 2:
Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
Return 4
The two words can be "ab", "cd".

Example 3:
Given ["a", "aa", "aaa", "aaaa"]
Return 0
No such pair of words.
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  'use strict';

  const length = words.length;
  const letterFlags = new Array(length).fill(0);
  const base = 'a'.charCodeAt(0);
  let maxProduct = 0;

  for (let i = 0; i < length; ++i) {
    const word = words[i];
    const wordLength = word.length;

    for (let j = 0; j < wordLength; ++j) {
      letterFlags[i] |= 1 << (word.charCodeAt(j) - base);
    }
  }

  for (let i = 0; i < length; ++i) {
    const wordA = words[i];
    const lengthWordA = wordA.length;

    for (let j = i + 1; j < length; ++j) {
      const wordB = words[j];
      const lengthWordB = wordB.length;
      const potentialMax = lengthWordA * lengthWordB;

      if ((potentialMax > maxProduct) && ((letterFlags[i] & letterFlags[j]) === 0)) {
        maxProduct = potentialMax;
      }
    }
  }

  return maxProduct;
};
