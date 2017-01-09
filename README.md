# LeetCode [Archived]
My solutions for LeetCode problems (mostly in JavaScript)

# Notes
* The solutions proposed are not necessarily the fastest/best ones, so beware when taking them as a reference
* The code has no comments **intentionally**, so that every time I go through a problem for a second time I rethink about it again (a bit)
* There are three useful commands into the `Makefile`
  * `info`: counts the number of solved problems
  * `check`: check the syntax and code conventions of the JavaScript solutions
  * `fix`: fix the style (indentation, spaces, etc.) of the JavaScript solutions

# License
* Statemens of the problems are property of [LeetCode](https://leetcode.com/)
* Solutions are realased under the [MIT License](LICENSE)

# Hide locked problems
* Copy, paste and execute the following into the JavaScript console in the browser (F12):

```javascript
const rows = document.querySelectorAll('.reactable-data tr')

for (let i = 0; i < rows.length; ++i) {
  const row = rows[i]
  if (row.querySelector('.fa-lock')) {
    row.remove()
  }
}
```
