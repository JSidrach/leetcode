/*
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
*/

'use strict'

/**
 * @constructor
 */
const Stack = function() {
  this.queue = []
}

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  const tmpQueue = []

  while (this.queue.length !== 0) {
    tmpQueue.unshift(this.queue.shift())
  }

  this.queue.unshift(x)

  while (tmpQueue.length !== 0) {
    this.queue.unshift(tmpQueue.shift())
  }
}

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  this.queue.pop()
}

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  return this.queue[this.queue.length - 1]
}

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return (this.queue.length === 0)
}
