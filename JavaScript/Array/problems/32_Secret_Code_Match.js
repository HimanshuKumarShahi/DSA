class Solution {
  isIsomorphic(s, t) {
    // s: first string
    // t: second string
    // Returns true if s and t are isomorphic, false otherwise
      
    if (s.length !== t.length) return false;
    
    let S = new Map();
    let T = new Map();
    
    for (let i = 0; i < s.length; i++) {
        let _S = s[i];
        let _T = t[i];
        
        if (S.has(_S)) {
            if (S.get(_S) !== _T) return false;
            
        } else {
            S.set(_S, _T);
        }
        
        if (T.has(_T)) {
            if (T.get(_T) !== _S) return false;
        } else {
            T.set(_T, _S);
        }
    }
    
    return true;
  }
}