with open('data.txt', mode='r') as f:
  print(f.tell()) # 0
  
  d1 = f.read()
  print(f"d1 = {d1}")
  
  print(f.tell()) # 67
  
  # reset the cursor:
  f.seek(0)
  print(f.tell()) # 0
  d2 = f.read(7)
  print(f"d2 = {d2}")
  
  print(f.tell()) # 7
  
  d3 = f.read(16)
  print(f"d3 = {d3}")
  
  # -------------------------------------------------
  
  
  
  