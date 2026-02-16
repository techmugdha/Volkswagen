# Base class 1
class Camera:
  def __init__(self, resolution):
    self.resolution = resolution
    
  def take_photo(self):
    return f"Photo taken at {self.resolution} resolution"
  
class MusicPlayer:
  def __init__(self, supported_formats):
    self.supported_formats = supported_formats
    
  def play_music(self, track, format):
    if(format in self.supported_formats):
      return f"Playing {track} in {format} format"
    else:
       return f"Format {format} not supported.."
  
# Smartphone is Camera, Smartphone is MusicPlayer
class SmartPhones(Camera, MusicPlayer):
  def __init__(self, resolution, supported_formats, brand):
    Camera.__init__(self,resolution)
    MusicPlayer.__init__(self,supported_formats)
    self.brand = brand
    
  def show_features(self):
    return f"{self.brand} Smarphone with {self.resolution} camera and music supported for {self.supported_formats} formats"
  
  
# Usage:
my_phone =SmartPhones("1080p",['mp3','mp4','aac'],'Apple')

print(my_phone.show_features())
print(my_phone.take_photo())
print(my_phone.play_music('Imaging','mp3'))

  