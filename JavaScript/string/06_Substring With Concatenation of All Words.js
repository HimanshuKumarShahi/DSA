class Solution {
  findSubstring(s, words) {
    if (!s || !words || words.length === 0) return [];

    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
    const wordCount = {};
    for (let word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }

    const result = [];

    for (let i = 0; i <= s.length - totalLen; i++) {
      const seen = {};
      let j = 0;

      while (j < words.length) {
        const word = s.substr(i + j * wordLen, wordLen);
        if (wordCount[word]) {
          seen[word] = (seen[word] || 0) + 1;
          if (seen[word] > wordCount[word]) break;
        } else {
          break;
        }
        j++;
      }

      if (j === words.length) result.push(i);
    }

    return result;
  }
}