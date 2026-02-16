# Hierarchical inhertance
# Base class
class Employee:
  def __init__(self, emp_id,emp_name):
    self.emp_id = emp_id
    self.emp_name = emp_name
  
  def show_details(self):
    return f"ID: {self.emp_id}, Name: {self.emp_name}"
  
# Derived class 1 
class Developer(Employee):
  def __init__(self, emp_id, emp_name, programming_languages):
    super().__init__(emp_id, emp_name)
    self.programming_languages = programming_languages
    
  def show_details(self):
    base = super().show_details()
    return f"{base}, Role: Developer, Languages: {self.programming_languages}"

# Derived class 2  
class Manager(Employee):
  def __init__(self, emp_id, emp_name, team_size):
    super().__init__(emp_id, emp_name)
    self.team_size = team_size
    
  def show_details(self):
    base = super().show_details()
    return f"{base}, Role: Manager, Team Size: {self.team_size}"

# Derived class 3  
class Intern(Employee):
  def __init__(self, emp_id, emp_name,duration):
    super().__init__(emp_id, emp_name)
    self.duratin_in_months = duration
    
  def show_details(self):
    base = super().show_details()
    return f"{base}, Role: Intern, Duration: {self.duratin_in_months}"
    
    
# Usage:
dev = Developer(emp_name='Bob Holmes', emp_id=475, programming_languages="Python, React, Flask")

mgr = Manager(emp_name='Charlie Goodwin', emp_id=842, team_size=45)

intern = Intern(emp_name='Sam Gamgee', emp_id= 2289, duration=4)

print(dev.show_details())
print(mgr.show_details())
print(intern.show_details())

