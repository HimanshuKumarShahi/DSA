print("In normal array it store similar type of elements | but in python it contains element of different data types. , ")

# import array
from array import *

# val = array.array('i',[1,2,3,4,5,6,7])

val = array('i',[1,2,3,4,5,6,7,90,73,121])  ## when use from array import *

# for i in range(0,7):
for i in range(0,len(val)):
    print(val[i],end=' - ')

print("\n")

for _ in val:
    print(_ , end='-')

print(val.typecode)

val.reverse()

for i in range(0,len(val)):
    print(val[i],end=",")

print('\n')

val.insert(0,399)
val.append(99)

for i in range(0,len(val)):
    print(val[i],end=",")

print('\n')

copyarray=array(val.typecode , (x*9 for x in val))

for i in range(0,len(copyarray)):
    print(copyarray[i],end=",")
print('\n')

copyarray.pop(0)
copyarray.remove(36)

for i in range(0,len(copyarray)):
    print(copyarray[i],end=",")

print('\n')

abc = val[1:4]

for i in range(0,len(abc)):
    print(abc[i],end='[-]')

print('\n')
abc = val[2:-2]
for i in range(0,len(abc)):
    print(abc[i],end='[-]')
print('\n')
abc = val[:4]
for i in range(0,len(abc)):
    print(abc[i],end='[-]')

print('\n')

abc = val[::-1]
for i in range(0,len(abc)):
    print(abc[i],end='|')

print('\n')

arr=array('i',[])

n=int(input("Please enter a number:- "))

for i in range(0,n):
    arr.append(int(input("Enter next number: ")))

for _ in arr:
    print(_,end=' ')

print('\n')
print('Array:',arr)

i=arr.index(8)

print('\n')
print(i)

print('--------------------')

# import numpy as np 

from numpy import *

val=array([3,7,4,0.1,9.3])

# val=[3,4.5,6,8,9]

for x in val:
    print(float(x) , end='_')

print('\n')

# items=linspace(10,99,100)
items=arange(10,20,2)

for x in items:
    print(x , end='_')

print("\n")

zero = array(10)
print("Zero Dimension",zero)

print('\n')

oneD=array([34,67,12,90,76])
print("One Dimension",oneD)

print('\n')

twoD=array([[1,2,3],[90,100,120],[4,5,6]])
print(twoD)
print('\n')

threeD=array([ [[12,34,66],[93,87,30]] , [[35,88,45],[55,37,1]] ])
print(threeD)

print('\n')
D=array([[[1,2],[3,4]],[[5,6],[7,8]]])
print(D)