/**
 * @param {number} n
 * @param {number[][]} requirements
 * @return {number}
 */
var numberOfPermutations = function (n, requirements) {
    const MOD = 1e9 + 7;
    const req_map = new Array(n).fill(-1);
    let max_inv = 0;

    for (const [end, cnt] of requirements) {
        req_map[end] = cnt;
        if (cnt > max_inv) {
            max_inv = cnt;
        }
    }

    if (req_map[0] > 0) {
        return 0;
    }
    req_map[0] = 0;

    let dp = new Array(max_inv + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i < n; i++) {
        const next_dp = new Array(max_inv + 1).fill(0);
        let current_sum = 0;

        for (let j = 0; j <= max_inv; j++) {
            current_sum = (current_sum + dp[j]) % MOD;

            if (j >= i + 1) {
                current_sum = (current_sum - dp[j - (i + 1)] + MOD) % MOD;
            }

            next_dp[j] = current_sum;
        }

        if (req_map[i] >= 0) {
            const target = req_map[i];
            for (let j = 0; j <= max_inv; j++) {
                if (j !== target) {
                    next_dp[j] = 0;
                }
            }
        }

        dp = next_dp;
    }

    return dp[req_map[n - 1]];
};