/*
Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

For example,
words: ["This", "is", "an", "example", "of", "text", "justification."]
L: 16.

Return the formatted lines as:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Note: Each word is guaranteed not to exceed L in length.
*/

'use strict'

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function(words, maxWidth) {
  const nWords = words.length
  const output = []

  for (let i = 0; i < nWords; ++i) {
    let j = i
    let lengthWordsLine = 0
    let nextWord = words[i]

    while ((j < nWords) && (lengthWordsLine + (j - i) + nextWord.length) <= maxWidth) {
      lengthWordsLine += nextWord.length
      nextWord = words[++j]
    }

    let line = ''
    const numWordsLine = j - i

    if ((j < nWords) && (numWordsLine > 1)) {
      const totalSpaces = maxWidth - lengthWordsLine
      const minSpaces = Math.floor(totalSpaces / (numWordsLine - 1))

      for (let k = 0; k < (numWordsLine - 1); ++k) {
        line += words[i + k]
        line += ' '.repeat(minSpaces + ((totalSpaces % (numWordsLine - 1) > k) ? 1 : 0))
      }

      line += words[j - 1]
    }
    else {
      line = words.slice(i, j).join(' ') + ' '.repeat(maxWidth - lengthWordsLine - numWordsLine + 1)
    }

    output.push(line)
    i = j - 1
  }

  return output
}
