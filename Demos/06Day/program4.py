class Person:
  # setter / mutator method:
  def setname(self,nm):
    self.person_name = nm
    
  # getter / accessor method:
  def getname(self):
    return self.person_name
  
p1 = Person()
p2 = Person()

p1.setname(input('Enter name for p1: '))
p2.setname(input('Enter name for p2: '))

print(p1.__dict__)
print(p2.__dict__)

print(p1.getname())
print(p2.getname())

