class Singleton:  
  _instance = None
  
  def __new__(cls,*args, **kwargs):
    if cls._instance is None:
      print('Creating new instance')
      cls._instance = super().__new__(cls)
    return cls._instance
  
  def __init__(self, value):
    self.value = value
    
s1 = Singleton(10) # Singleton.__new__() *args / **kwargs
s2 = Singleton(20) # Singleton.__new__()

print(s1.value)
print(s1 is s2) # True
print(s1.__dict__)
print(s1.__dict__)




