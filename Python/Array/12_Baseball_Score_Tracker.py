class Solution:
    def baseballScoreTracker(self, operations):
        '''
        operations: List[str] - a list of operations to apply to the score record
        Returns the total score after applying all operations
        '''
        stack = []

        for i in operations:
            if(i == "+"):
                if len(stack) >= 2:
                    stack.append(stack[-1] + stack[-2])
            elif(i == "C"):
                if stack:
                    stack.pop()
            elif(i == "D"):
                if stack:
                    stack.append(stack[-1]*2)
            else:
                try:
                    stack.append(int(i))
                except ValueError:
                    continue
               
            
        return sum(stack)
