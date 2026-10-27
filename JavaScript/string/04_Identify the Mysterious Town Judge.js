class Solution {
  findJudge(n, trust) {
    // n: the number of people in the town
    // trust: a 2D array where trust[i] = [a, b] means person a trusts person b

    // Your implementation here
    let trustScores = new Array(n + 1).fill(0);

    for (let [a, b] of trust) {
      trustScores[a]--; 
      trustScores[b]++; 
    }

    for (let i = 1; i <= n; i++) {
      if (trustScores[i] === n - 1) {
        return i;
      }
    }

    return -1;
  }
}
