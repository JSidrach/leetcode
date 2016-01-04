/*
Compare two version numbers version1 and version2.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

0.1 < 1.1 < 1.2 < 13.37
*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  'use strict';

  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const v1Length = v1.length;
  const v2Length = v2.length;
  const length = Math.max(v1Length, v2Length);

  for (let i = 0; i < length; ++i) {
    const subV1 = (i >= v1Length) ? 0 : parseInt(v1[i], 10);
    const subV2 = (i >= v2Length) ? 0 : parseInt(v2[i], 10);

    if (subV1 > subV2) {
      return 1;
    }
    else if (subV2 > subV1) {
      return -1;
    }
  }

  return 0;
};
