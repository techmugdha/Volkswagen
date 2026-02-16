class Base:
  def __init__(self):
    print('Base class constrctor called.')
    self.base_name = 'Walter Bishop'
  

class Derived(Base):
  # ctor overriding:
  def __init__(self):
    print("Derived class constructor called.")
    self.base_name  = 'Peter Bishop'
    
  
  
d1 = Derived()
print(d1.__dict__)
