class Solution {
  countSegments(s) {
    // s: a string input
    if (!s || s.trim() === '') return 0;
    return s.split(/\s+/).filter(segment => segment.length > 0).length;
    }
}

// -------------------------

class Solution {
  countSegments(s) {
    // s: a string input
    let count = 0;
      
        for (let i = 0; i < s.length; i++) {
            
            if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) {
                count++;
            }
        }
        return count;
    }
}