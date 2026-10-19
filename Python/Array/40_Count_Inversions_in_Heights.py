class Solution:
    def countInversions(self, arr):
        
        '''
        arr: list[int] - integer array containing the heights
        '''
     
        def merge_sort_and_count(left: int, right: int) -> int:
            count = 0
            if left < right:
                mid = (left + right) // 2
                

                count += merge_sort_and_count(left, mid)
                count += merge_sort_and_count(mid + 1, right)
                count += merge_and_count(left, mid, right)
                
            return count

        def merge_and_count(left: int, mid: int, right: int) -> int:
            left_sub = arr[left : mid + 1]
            right_sub = arr[mid + 1 : right + 1]
            
            i, j, k = 0, 0, left
            inv_count = 0
            while i < len(left_sub) and j < len(right_sub):
                if left_sub[i] <= right_sub[j]:
                    arr[k] = left_sub[i]
                    i += 1
                else:
                    arr[k] = right_sub[j]
                    j += 1
                    inv_count += (len(left_sub) - i)
                k += 1

            while i < len(left_sub):
                arr[k] = left_sub[i]
                i += 1
                k += 1

            while j < len(right_sub):
                arr[k] = right_sub[j]
                j += 1
                k += 1
                
            return inv_count

        return merge_sort_and_count(0, len(arr) - 1)
