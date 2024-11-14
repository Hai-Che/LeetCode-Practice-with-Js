/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = s.split(" ")
    if (pattern.length !== words.length) return false
    let charToWord = new Map()
    let wordToChar = new Map()
    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i]
        let word = words[i]
        if (charToWord.get(char) && charToWord.get(char) !== word) return false
        if (wordToChar.get(word) && wordToChar.get(word) !== char) return false
        charToWord.set(char, word)
        wordToChar.set(word, char)
    }
    return true;
};