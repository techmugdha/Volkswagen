# with open('data1.txt', mode='w') as f:
#   num = f.write("Hugh Jackman")
#   print(F'done writting chars: {num}')

#--------------------------------------------------

# with open('data1.txt', mode='w') as f:
#   num = f.write("Bob Miller Hugh Jackman Tom Ellis Peter Pan")
#   print(F'done writting chars: {num}')  
  

# with open('data1.txt', mode='w') as f:
#   names = ['Bob Miller\n','Hugh Jackman\n','Tom Ellis\n','Peter Pan\n']
#   f.writelines(names)
#   print('done writting list into file')  
  
# writting data in append mode:  
# with open('data1.txt', mode='a') as f:
#   names = ['Samwise Gamgee\n','Forodo Baggins\n','Bilbo Baggins\n','Golum Golum\n']
#   f.writelines(names)
#   print('done writting list into file')  
  
# -----------------------------------------
# x-mode : if file exist thrs error
# it compulsory creates new files every time called

with open('data2.txt', mode='x', encoding='utf-8') as f:
  names = ['Samwise Gamgee\n','Forodo Baggins\n','Bilbo Baggins\n','Golum Golum']
  f.writelines(names)
  print('done writting list into file') 
  
