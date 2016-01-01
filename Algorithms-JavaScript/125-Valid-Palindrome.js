/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  'use strict';

  let plainS = [];
  let length = 0;

  for (let i = 0; i < s.length; ++i) {
    const c = s[i].toLowerCase();
    if (((c >= 'a') && (c <= 'z')) || ((c >= '0') && (c <= '9'))) {
      plainS[length] = c;
      ++length;
    }
  }

  for (let i = 0; i < plainS.length / 2; ++i) {
    if (plainS[i] !== plainS[plainS.length - i - 1]) {
      return false;
    }
  }

  return true;
};
