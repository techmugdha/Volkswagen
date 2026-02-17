class Demo:
  def __new__(cls, *args, **kwargs):
    print('Creating an instance')
    return super().__new__(cls)
  
  def __init__(self, value):
    print('Initializing instance...')
    self.value = value
    
  def __call__(self,value):
    return f'Value : {self.value}'
    
  # def __del__(self):
  #   print(f'Releasing resources: {self.value}')
    
d1 = Demo(10)
# print(d1.value)
# d2 = Demo(20)
# print(d2.value)
# print(d1 is d2)
# del d2.value

print(callable(d1))
print(callable(Demo))

print(d1(222))
