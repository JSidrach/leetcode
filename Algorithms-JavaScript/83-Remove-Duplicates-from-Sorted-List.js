/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
const deleteDuplicates = function(head) {
  if (head === null) {
    return null
  }

  let prevNode = head
  let node = head.next

  while (node !== null) {
    if (node.val !== prevNode.val) {
      prevNode.next = node
      prevNode = node
    }

    node = node.next
  }

  if (prevNode.next !== null) {
    prevNode.next = null
  }

  return head
}
