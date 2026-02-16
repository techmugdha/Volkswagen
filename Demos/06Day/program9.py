class Cars:
  colour = 'Black'
  
  @staticmethod
  def start(car_name):
    print(f'{car_name} started..')
  
  @staticmethod
  def stop(car_name):
    print(f'{car_name} stopped!')
    
class Thar(Cars):
  def __init__(self):
    super().__init__()
    
# myThar = Thar()
# myThar.colour = 'Black'
Thar.start('my Thar')
Thar.stop('my Thar')
