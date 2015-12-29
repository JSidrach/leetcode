/*
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  'use strict';

  let nBin = n.toString(2);
  nBin = '0'.repeat(32 - nBin.length) + nBin;

  let reversed = '';
  for (let i = 31; i >= 0; --i) {
    reversed += nBin[i];
  }

  return parseInt(reversed, 2);
};
