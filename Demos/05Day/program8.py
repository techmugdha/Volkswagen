# x = 10
# X = 10 # constant
# X = 20
# print(type(X))
# print(isinstance(X,int))

# if(isinstance(X,int)):
#   print('True')
  
# if(type(X) == "<class 'int'>"):
#    print('True')

# -------------------------------------------------

class Demo:
  pass

d1 = Demo() # we are invoking default constructor here
# print(type(d1))
# print(isinstance(d1, Demo))

class A:
  pass

class B:
  pass

class C(A,B):
  pass

a1 = A()
b1 = B()
c1 = C()

# print(type(c1))
# print(isinstance(c1,A))
# print(isinstance(c1,B))


