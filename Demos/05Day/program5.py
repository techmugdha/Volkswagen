import os

filenames = []
merged_data = ""

while True:
    file_name = input("Enter file name: ")
    filenames.append(file_name)
    
    ynch = input('Do you want to add another file name? y/n: ').lower()
    if ynch != 'y':
        break
  
for filenm in filenames:
    filename = filenm + '.txt'
    if os.path.isfile(filename):
        # if True means file exist!
        with open(filename, mode='r', encoding='utf-8') as f:
            merged_data = merged_data + f.read() + "\n"
           

with open('finaldata.txt', mode='x', encoding='utf-8') as f:
    f.write(merged_data) 
    print('File wrtting operation is done!!')