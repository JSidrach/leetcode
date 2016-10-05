/*
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Notes:
You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
*/

'use strict'

/**
 * @constructor
 */
const Queue = function() {
  this.stack = []
}

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  const tmpStack = []

  while (this.stack.length !== 0) {
    tmpStack.push(this.stack.pop())
  }

  this.stack.push(x)

  while (tmpStack.length !== 0) {
    this.stack.push(tmpStack.pop())
  }
}

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  this.stack.pop()
}

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return (this.stack.length === 0)
}
