/*
Reverse a singly linked list.
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  'use strict';

  if (head === null) {
    return null;
  }

  let nodePrev = null;
  let node = head;

  while (node !== null) {
    const tmp = node.next;
    const tmpPrev = node;
    node.next = nodePrev;
    node = tmp;
    nodePrev = tmpPrev;
  }

  return nodePrev;
};
