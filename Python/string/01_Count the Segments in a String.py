class Solution:
    def countSegments(self, s: str) -> int:
        '''
        s: a string input
        '''
        return len(s.split())

# -----------------------------------

# class Solution {
#   countSegments(s) {
#     // s: a string input
#     if (!s || s.trim() === '') return 0;
#     return s.split(/\s+/).filter(segment => segment.length > 0).length;
#     }
# }