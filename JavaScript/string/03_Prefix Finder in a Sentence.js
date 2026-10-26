class Solution {
  isPrefixOfWord(sentence, searchWord) {
    // sentence: the sentence comprised of words separated by spaces
    // searchWord: the word to check as a prefix
      const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
  }
}