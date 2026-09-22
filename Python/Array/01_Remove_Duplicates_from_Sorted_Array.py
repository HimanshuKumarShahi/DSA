from numpy import *


arr=array([1,2,3,1,2,2,3,3,4,5,6,6,6,6])

i=0
j=1

# if not arr:
#      return 0

for j in range(len(arr)):
    if(arr[i] != arr[j]):
        i+1
    arr[i] = arr[j]

# return i + 1