/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const rankIndices = score.map((_, index) => index).sort((a, b) => score[b] - score[a]);
    const ranks = Array(rankIndices.length)
    for (let i = 0; i < rankIndices.length; i++) {
        if (i === 0) ranks[rankIndices[0]] = 'Gold Medal'
        else if (i === 1) ranks[rankIndices[1]] = 'Silver Medal'
        else if (i === 2) ranks[rankIndices[2]] = 'Bronze Medal'
        else ranks[rankIndices[i]] = `${i + 1}`;
    }
    return ranks;
};