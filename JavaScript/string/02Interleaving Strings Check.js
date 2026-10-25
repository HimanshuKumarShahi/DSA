class Solution {
  isInterleave(s1, s2, s3) {
    // s1: first input string
    // s2: second input string
    // s3: string to check if it's an interleaving of s1 and s2

    // Your implementation here
    let m = s1.length;
    let n = s2.length;

    if (m + n !== s3.length) {
      return false;
    }
    if (m < n) {
      [s1, s2] = [s2, s1];
      [m, n] = [n, m];
    }

    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let j = 1; j <= n; j++) {
      dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
    }

    for (let i = 1; i <= m; i++) {
      dp[0] = dp[0] && s1[i - 1] === s3[i - 1];

      for (let j = 1; j <= n; j++) {
        const currentS3Char = s3[i + j - 1];

        const matchS1 = dp[j] && s1[i - 1] === currentS3Char;
        const matchS2 = dp[j - 1] && s2[j - 1] === currentS3Char;

        dp[j] = matchS1 || matchS2;
      }
    }

    return dp[n];
  }
}
