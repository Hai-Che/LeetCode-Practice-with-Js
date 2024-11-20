/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const rows = [
        new Set('qwertyuiop'),
        new Set('asdfghjkl'),
        new Set('zxcvbnm')
    ]
    return words.filter(word => {
        const lowerCaseWord = word.toLowerCase()
        for (const row of rows) {
            if ([...lowerCaseWord].every(char => row.has(char))) {
                return true
            }
        }
        return false
    })
};