class Solution:
    def maximizeStockProfit(self, prices):
        '''
        prices: list of prices for each day
        Return the maximum profit one can achieve
        '''
        profit = 0
        buy = float('inf')

        for i in prices:
            if(i < buy):
                buy = i
            else:
                if(profit < (i - buy)):
                    profit = (i-buy)
        return profit
