/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
     const seen = new Array(26).fill(false);
        let count = 0;
        
        for (let i = 0; i < sentence.length; i++) {
            const idx = sentence.charCodeAt(i) - 97;
            if (!seen[idx]) {
                seen[idx] = true;
                count++;
            }
            if (count === 26) return true;
        }
        return count === 26;
};

// ------------------------

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const uniqueChars = new Set(sentence);
        
    return uniqueChars.size === 26;
};