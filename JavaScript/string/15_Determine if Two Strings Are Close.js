/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    const count1 = new Map();
    const count2 = new Map();

    for (const char of word1) {
        count1.set(char, (count1.get(char) || 0) + 1);
    }
    for (const char of word2) {
        count2.set(char, (count2.get(char) || 0) + 1);
    }

    const keys1 = [...count1.keys()].sort().join('');
    const keys2 = [...count2.keys()].sort().join('');
    if (keys1 !== keys2) return false;

    const freq1 = [...count1.values()].sort((a, b) => a - b).join(',');
    const freq2 = [...count2.values()].sort((a, b) => a - b).join(',');

    return freq1 === freq2;
};