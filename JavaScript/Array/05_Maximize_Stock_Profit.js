class Solution {
    maximizeStockProfit(prices) {
        // prices: list of prices for each day
        // Return the maximum profit one can achieve

         if (prices.length <= 1) return 0
    
    let profit = 0;
    let buy = prices[0];

    for(let i = 1; i < prices.length; i++){
        if(prices[i] < buy){
            buy = prices[i]
        }
        else if( prices[i] - buy > profit){
                profit = prices[i] - buy;
            }
        }
    return profit
    }
};