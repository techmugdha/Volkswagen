class Employee:
  '''This is employee class for maintaining emp related data'''
  # Class Variable:
  company_name = "Bonaventure Systems"
  def __init__(self,nm,ag):
    # Instance variables
    self.empname = nm
    self.empage = ag
  
  # Instance method  
  def display(self):
    print(f"name is {self.empname} and age is {self.empage} works with {self.company_name} company")
  
  # To modify instance variable
  def change_name(self,nm):
    self.empname = nm
  
  # To modify instance variable
  def change_age(self,ag):
    self.empage = ag
    
  # To modify class variables
  @classmethod
  def set_new_company_name(cls,cnm):
    cls.company_name = cnm
  
  # To modify class variables
  @classmethod
  def get_new_company_name(cls):
    print(f"New Name : {cls.company_name}")
    
    
emp1 = Employee('Bob', 23)
# When you change value of class variables, it impacts all class objects
# Employee.company_name = 'Upthrust'
emp2 = Employee('Sam', 37)
# print(emp1.__dict__)

emp1.display()
emp2.display()

# emp1.change_name('Tim')
# emp1.change_age(32)
# print(emp1.__dict__)

# -------------------- 
# class variable set and get
Employee.company_name = 'BVS'
Employee.get_new_company_name()
Employee.set_new_company_name('Upthrust')
# print(Employee.__dict__)
Employee.get_new_company_name()

# emp1.get_new_company_name()
# emp1.set_new_company_name('Upthrust')
# print(emp1.__dict__)
# emp1.get_new_company_name()

emp1.display()
emp2.display()



    