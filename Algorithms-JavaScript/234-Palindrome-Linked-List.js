/*
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
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
const isPalindrome = function(head) {
  const orig = { val: -1, next: head }
  let length = 0
  let p = orig

  while (p.next !== null) {
    p = p.next;
    ++length
  }

  p = head
  let prev = orig

  for (let i = 0; i < length / 2; ++i) {
    const tmp = p.next
    p.next = prev
    prev = p
    p = tmp
  }

  if (length % 2 === 1) {
    prev = prev.next
  }

  while ((p !== null) && (prev !== orig)) {
    if (p.val !== prev.val) {
      return false
    }

    p = p.next
    prev = prev.next
  }

  return ((p === null) && (prev === orig))
}
