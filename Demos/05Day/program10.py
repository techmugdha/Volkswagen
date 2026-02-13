class Person:
  '''Holds data and represents information about Person'''
  Id = 111 # Class Attribute
  # Dunder Function:
  def __init__(self, name, address):
    self.name = name # Instance Attribute
    self.address = address
    print(f"name : {self.name}")
   
  # user defined function 
  def display(self):
     print(f"name : {self.name}, Address: {self.address}") 
  
  # user defined function 
  def show(obj):
     print(f"name : {obj.name}, Address: {obj.address}") 
     
     
p1 = Person("Hugh Jackman", "New York")
Person.Id = 222
p1.display()
p1.show()
print(p1.Id)
print(Person.Id)

print(p1.__doc__)   
print(p1.__dict__)
   
    
