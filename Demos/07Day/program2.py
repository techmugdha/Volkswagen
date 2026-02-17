class Employee:
  def __init__(self,first,last):
    self.firstname = first
    self.lastname = last
  
  @property  
  def fullname(self): # getter method
    return f"{self.firstname} {self.lastname}"
  
  @fullname.setter
  def fullname(self,name): # setter method : Hugh Jackman
    first,last = name.split()
    self.firstname = first
    self.lastname = last
    
  @fullname.deleter
  def fullname(self):
    print('Function object deleted from memory..')
    
  def show(self):
     print('Show') 
    
    
emp1 = Employee('Peter', 'Bishop')
emp2 = Employee('Walter', 'Bishop')

# print(emp1.fullname())
# print(emp1.fullname) # calling getter associated with this variable
# print(emp1.firstname) # calling getter associated with this variable
# print(emp1.lastname)

emp2.firstname = 'Olivia'
# print(emp2.fullname)
# print(emp2.firstname)
# print(emp2.lastname)

emp2.fullname = 'Olivia Dunam' # call to setter
# print(emp2.fullname) # call to getter
# print(emp2.firstname)
# print(emp2.lastname)

del emp1.fullname
del emp2.fullname

# del emp1

# emp1.age = 23
# print(emp1.__dict__)
# del emp1.age
# print(emp1.__dict__)

# ----------------------------------------------

# print(callable(emp1))
# print(callable(emp1.fullname))
# print(callable(emp1.show))
# print(callable(Employee))

# x = 20
# print(callable(x))