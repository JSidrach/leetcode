/*
Given a singly linked list, group all odd nodes together followed by the even nodes.
Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place.
The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
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
const oddEvenList = function(head) {
  const headEvens = { next: null }
  let odds = head
  let evens = headEvens

  while ((odds !== null) && (odds.next !== null)) {
    evens.next = odds.next
    odds.next = odds.next.next
    evens = evens.next
    if (odds.next !== null) {
      odds = odds.next
      evens.next = null
    }
  }

  if (odds !== null) {
    odds.next = headEvens.next
  }

  return head
}
