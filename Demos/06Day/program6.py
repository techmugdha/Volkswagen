# is a kind of relationship between two individual enties:
# Manager is of type Employee
class Employee:
  no_of_holidays = 20
  def display(self):
    print('This is employee class method')
    
class Manager(Employee):
  no_of_holidays = 18
  def show(self):
    print('This is manager class method')
    
mgr = Manager()
mgr.display()
mgr.show()
print(mgr.no_of_holidays)

emp = Employee()
emp.display()
print(emp.no_of_holidays)