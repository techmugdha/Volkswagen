import csv

# output as list
# with open('empdata.csv','r') as f:
#   emp_data = csv.reader(f, delimiter=',')
#   # print(emp_data) # <_csv.reader object at 0x000002008F517FA0>
#   for record in emp_data:
#     print(record) # creating seperate lists for every records
    
# output as dictionary
with open('empdata.csv','r') as f:
  emp_data = csv.DictReader(f, delimiter=',')
  # print(emp_data) # <_csv.reader object at 0x000002008F517FA0>
  for record in emp_data:
    print(f"{record['Name']} = {record['Salary']}") # 