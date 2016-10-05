/*
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
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
 * @return {boolean}
 */
const hasCycle = function(head) {
  if (head === null) {
    return false
  }

  const origin = { val: -1, next: head }
  let prev = origin
  let p = head

  while ((p !== null) && (p.next !== origin)) {
    const tmp = p.next
    p.next = prev
    prev = p
    p = tmp
  }

  return (p !== null)
}
