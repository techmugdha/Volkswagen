from abc import ABC, abstractmethod

# This acts like an interface. Any subclass must implemnet all 3 methods
class IDatabase(ABC):
  @abstractmethod
  def insert(self):
    pass
  
  @abstractmethod
  def update(self):
    pass
  
  @abstractmethod
  def delete(self):
    pass

# Implement concrete classes
class MySQL(IDatabase):
  def insert(self):
    print("insert in MySQL db done")
  
  def update(self):
    print("update in MySQL db done")
  
  def delete(self):
    print("delete in MySQL db done")

# Implement concrete classes    
class Oracle(IDatabase):
  def insert(self):
    print("insert in Oracle db done")
  
  def update(self):
    print("update in Oracle db done")
  
  def delete(self):
    print("delete in Oracle db done")
    
# Implement concrete classes    
class MSSQLServer(IDatabase):
  def insert(self):
    print("insert in MSSQLServer db done")
  
  def update(self):
    print("update in MSSQLServer db done")
  
  def delete(self):
    print("delete in MSSQLServer db done")
    

# Implement the Factory : produce other class objects
class DbFactory: # Factory class
  @staticmethod
  def get_db(choice:int) -> IDatabase:
    # Factory method
    if choice == 1:
      return MySQL()
    elif choice == 2:
      return Oracle()
    elif choice == 3:
      return MSSQLServer()
    else:
      print('Invalid database choice!!!')
      
# Main program: UI
if __name__ == "__main__":
  try:
    dbchoice = int(input('Enter your database choice: 1. MySQL, 2. Oracle, 3. MS SQL Server: \n'))
    db = DbFactory.get_db(dbchoice)
    dbop_choice = int(input('Enter your db operation choice: 1. Insert, 2. Update, 3. Delete: \n'))
    # switch - case:
    match dbop_choice:
      case 1: 
        db.insert()
      case 2:
        db.update()
      case 3:
        db.delete()
      case _:
        # print("Invalid Db operation choice!!")
        raise ValueError("Invalid Db operation choice!!")
  except ValueError as ve:
    print(f"Error: {ve}")
  except Exception as e:
    print(f"Unexpected error: {e}")
  finally:
    print("Db connection closed!!!")
    del db