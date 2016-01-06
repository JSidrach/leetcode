/*
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  'use strict';

  const orig = { val: -1, next: head };
  let prev = orig;
  let p = orig.next;

  while (p !== null) {
    if (p.val === val) {
      prev.next = p.next;
    }
    else {
      prev = p;
    }

    p = p.next;
  }

  return orig.next;
};
