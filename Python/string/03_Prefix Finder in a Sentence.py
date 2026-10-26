class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        '''
        sentence: the sentence comprised of words separated by spaces
        searchWord: the word to check as a prefix
        '''
        words = sentence.split(" ")
        
        for i, word in enumerate(words):
            if word.startswith(searchWord):
                return i + 1
                
        return -1
