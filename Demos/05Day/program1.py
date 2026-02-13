# Reading from file: mode = 'r' : default mode
# f = open('data.txt')

# data = f.read()
# f.close()

# print(data)

#-----------------------
# writing into the file:

# f = open('data.txt',mode='w')

# str = input("Enter some text: ")

# f.write(str)
# f.close()

# print('done')

#----------------------------------------------

# f = open('data.txt', mode='r')

# print(f"File name: {f.name}") # data.txt
# print(f"File encoding is: {f.encoding}") # cp1252
# print(f"File mode: {f.mode}") # r
# print(f"File is closed: {f.closed}") #False

# f.close()

# print(f"File is closed: {f.closed}") # True

# # print(type(f))

#----------------------------------

# f = open('data.txt', mode='r')
# f1 = open('data.txt', mode='w')

# print(f.readable()) # True
# print(f1.readable()) # False

# print(f.writable()) # False
# print(f1.writable()) # True

# f.close()
# f1.close()

# --------------------------------------
# Check if file exist: isfile()

import os

def function1():
  if os.path.isfile('data.txt'):
    f = open('data.txt','r')
    d = f.read()
    print(d) 
    f.close()   
  else:
    print('File does not exist')

# function1()

# ------------------------------

def function2():
  if os.path.isfile('data.txt'):
    with open('data.txt','r') as f:
      d = f.read()
      print(d)
      
    print(f"Is file closed? {f.closed}")
  else:
    print('File does not exist')
    
# function2()