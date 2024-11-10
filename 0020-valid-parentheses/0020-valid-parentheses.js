/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const bracketSet = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    for (const brk of s) {
        if (bracketSet[brk]) {
            stack.push(brk)
        } else {
            const lastOpenBracket = stack.pop()
            if (brk !== bracketSet[lastOpenBracket]) return false
        }
    }
    return stack.length === 0
};