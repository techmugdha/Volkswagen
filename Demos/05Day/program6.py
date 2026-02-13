# reading first and then writing/ appending
# with open('data.txt',mode='r+') as f:
#   data = f.read()
#   print(data)
  
#   print('-'*15)
#   strinput = input('Enter some text: ')
#   f.write("\n"+strinput)
  
#   print('Done')

#--------------------------------------
# we are writing first and then reading
with open('data3.txt',mode='w+') as f:
  
  strinput = input('Enter some text: ')
  f.write("\n"+strinput)
  
  print('-'*15)
  
  f.seek(0)
  data = f.read()
  print(data)
  