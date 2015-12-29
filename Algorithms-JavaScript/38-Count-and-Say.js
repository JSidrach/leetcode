/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  'use strict';

  let seq = '1';

  for (let i = 1; i < n; ++i) {
    let nextSeq = '';
    let digit = seq[0];
    let count = 0;

    for (let j = 0; j < seq.length; ++j) {
      let newDigit = seq[j];

      if (newDigit === digit) {
        ++count;
      }
      else {
        nextSeq += count + digit;
        digit = newDigit;
        count = 1;
      }
    }

    seq = nextSeq + count + digit;
  }

  return seq;
};
