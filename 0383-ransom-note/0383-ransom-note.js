/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // const charMap = new Map()
    // for (const char of magazine) {
    //     charMap.set(char, (charMap.get(char) || 0) + 1)
    // }
    // for (const char of ransomNote) {
    //     if (!charMap.get(char) || charMap.get(char) <= 0) return false
    //     charMap.set(char, charMap.get(char) - 1)
    // }
    // return true
    const magazineCount = {};

    for (const char of magazine) {
        magazineCount[char] = (magazineCount[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!magazineCount[char] || magazineCount[char] === 0) {
            return false;
        }
        magazineCount[char]--;
    }

    return true;
};