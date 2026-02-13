# class Employee:
#   '''Holds employee data'''
#   # constructors are special methods
#   def __init__(self,id,nm):
#     self.emp_id = id
#     self.emp_name = nm
    
  # ctor overloadding is not allowed in python    
  
  
# emp1 = Employee(11,'Mugdha')
# emp2 = Employee('Hugh') # not allowed

# print(emp1.emp_id)
# print(emp1.emp_name)
# print(emp2.empname)# not allowed


#-----------------------------------------------------------------

# class Employee:
#   def __init__(self, id, nm = None):
#     if nm is None:
#       self.emp_id = id
#       self.emp_name = 'Default value for name'
#     else:
#       # initialize with 2 parameters
#       self.emp_id = id
#       self.emp_name = nm
      
# emp1 = Employee(101)
# emp2 = Employee(102, "Bob")

# # __dict__ :  all the names available in the current namespace
# print(emp1.__dict__) # {'emp_id': 101, 'emp_name': 'Default value for name'}
# print(emp2.__dict__) # {'emp_id': 102, 'emp_name': 'Bob'}


    
    
