# Context Managers : File IO

class FileManager:
  def __enter__(self):
    print('Openeing resources')
    return self
  
  def __exit__(self, exc_type, exc_val, exc_tb):
    print("Closing resorces")
    
with FileManager():
  print("Inside block")
    
