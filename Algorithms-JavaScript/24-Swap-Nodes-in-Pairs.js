/*
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
*/

'use strict'

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
const swapPairs = function(head) {
  if ((head === null) || (head.next === null)) {
    return head
  }

  const orig = { val: -1, next: head }
  let prev = orig
  let p = head

  while ((p !== null) && (p.next !== null)) {
    prev.next = p.next
    p.next = p.next.next
    prev.next.next = p

    prev = p
    p = p.next
  }

  return orig.next
}
