class Company(object):
  def __init__(self,cnm, cloc):
    self.company_name = cnm
    self.company_location = cloc
    print('Base Company class Constructor gets called..')
    
class Employee(Company):
  def __init__(self,nm,loc,department,designation):
    # ctor channing:
    super().__init__(nm,loc)
    self.emp_department = department
    self.emp_designation = designation
    print('Derived Employee contructor gets called..')
    

# c1 = Company('BVS','Pune')
# print(c1.__dict__)
# emp1 = Employee('IT','Manager')
# print(emp1.__dict__)

emp1 = Employee('BVS','Pune','IT','Manager')
print(emp1.__dict__)

