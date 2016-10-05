/*
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
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
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  const orig = { val: -1, next: head }
  let node = orig
  let p = orig

  while (n > 0) {
    node = node.next;
    --n
  }

  while (node.next !== null) {
    node = node.next
    p = p.next
  }

  p.next = p.next.next

  return (p === orig) ? head.next : head
}
