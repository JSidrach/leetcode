/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  'use strict';

  let p1 = l1;
  let p2 = l2;
  const head = { val: null, next: null };
  let p = head;

  while ((p1 !== null) && (p2 !== null)) {
    if (p1.val <= p2.val) {
      p.next = p1;
      p1 = p1.next;
    }
    else {
      p.next = p2;
      p2 = p2.next;
    }

    p = p.next;
  }

  p.next = (p1 !== null) ? p1 : p2;

  return head.next;
};
