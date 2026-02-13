# f = open('data.txt', mode='r')
# text_data= f.read()
# print(text_data)
# f.close()

# f1 = open('data.txt', mode='rb')
# binary_data = f1.read()
# print(binary_data) # b'Hugh Jackman\r\n\r\nGolumn\r\n\r\nSome Text'
# f1.close()

# ----------------------------------------------------------------

# f = open('data.txt', mode='r')
# data = f.read(7) # starts from 0 upto 7th char
# print(data)

# data1 = f.read(16) # starts from 7th char as 0 upto 16 chars
# print(data1)

# data2 = f.read(-5) # -ve no fetches all the text from file as it it
# print(data2)

# f.close()

# ----------------------------------------------------------------

# readline():

# with open('data.txt', mode='r') as f:
#   # data = f.readline(7)
#   # print(data, end="")
  
#   data1 = f.readline()
#   print(data1, end="")
  
#   data2 = f.readline(7)
#   print(data2, end="")
  
#---------------------------------------------------
# with open('data.txt', mode='r') as f:
#   data = f.readlines()
#   # print(type(data)) # <class, list>
#   print(data)
#   for line in data:
#     print(line, end="")
    
