class Person:
  def __init__(self,nm,add,ag):
    # Instance variables
    self.name = nm
    self.address = add
    self.age = ag
    
    
p1 = Person('Bob','London', 23)
# print(p1.__dict__)
print(p1.__getattribute__('name'))
p1.__setattr__('name','Sam')
# print(p1.__dict__)

del p1.age
# print(p1.__dict__)

# print(__name__)


    
  