/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    const isAllUp = word === word.toUpperCase()
    const isAllLow = word === word.toLowerCase()
    const firstCharCapOnly = word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase();
    return isAllUp || isAllLow || firstCharCapOnly;
};