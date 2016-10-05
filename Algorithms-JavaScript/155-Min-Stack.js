/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

'use strict'

/**
 * @constructor
 */
const MinStack = function() {
  this.stack = []
  this.minStack = []
}

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if ((this.minStack.length === 0) || (this.minStack[this.minStack.length - 1] > x)) {
    this.minStack.push(x)
  }
  else {
    this.minStack.push(this.minStack[this.minStack.length - 1])
  }
}

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minStack.pop()
}

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
}
