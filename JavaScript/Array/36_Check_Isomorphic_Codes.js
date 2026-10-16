class Solution {
  isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    let S = new Map();
    let T = new Map();

    for (let i = 0; i <= s.length; i++) {
      let charS = s[i];
      let charT = t[i];

      if (S.has(charS) && S.get(charS) !== charT) return false;
        
      if (T.has(charT) && T.get(charT) !== charS) return false;

      S.set(charS, charT);
      T.set(charT, charS);
    }

    return true;
  }
}
