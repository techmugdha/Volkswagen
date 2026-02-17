class Base:
  __country = "India" # __ : private
  def __init__(self,nm,bsv):
    self.name = nm # Public
    self._basevariable = bsv # Protected : realted to inheritance
    
  def __message(self): # Private
    return  "some message"
  
  def display_name(self): # Public
    print(f"Name: {self.name}, Country: {self.__country}, Message: {self.__message()}")
    
    
# b1 = Base('Peter', 23.33)
# # print(b1.__country)
# b1.display_name()
# # b1.__message()
# print(b1._basevariable)

class Derived(Base):
  def __init__(self, nm, bsv,address):
    super().__init__(nm, bsv)
    self.address = address
    
  def show(self):
    base = super().display_name()
    print(f"{base}, Address: {self.address}")
    print(self._basevariable)
    
d1 = Derived('Walter', 345, 'Pune')
d1.show()
d1._basevariable = 888
d1.show()


    