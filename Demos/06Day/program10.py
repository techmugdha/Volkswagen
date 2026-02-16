# Base class
class Person(object):
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def show_details(self):
    return f"Name: {self.name}, Age: {self.age}"
 
# Derived 1 class  
class Student(Person):
  def __init__(self, name, age, student_id, courses):
    super().__init__(name, age)
    self.student_id = student_id
    self.course = courses
    
  def show_details(self):
    base = super().show_details()
    return f"Id: {self.student_id}, {base}, Courses: {self.course}"
    
  
class GraduateStudents(Student):
  def __init__(self, name, age, student_id, courses,thesis_title):
    super().__init__(name, age, student_id, courses)
    self.thesis_title = thesis_title 
    
  def show_details(self):
    base = super().show_details()
    return f"{base}, Thesis subject is : {self.thesis_title}"
  
# Usage:

person = Person('Peter', 24)
student = Student('Bob', 25, 157, 'Python, Javascript, React, Flask')
gradstudent = GraduateStudents('Sam', 29, 862, 'Python, Javascript, React, Flask','Machine Learning')

print(person.show_details())
print(student.show_details())
print(gradstudent.show_details())


# class Template1:
#  def abc(self):
#    pass
 
# class Template2:
#  def abcd(self):
#    pass

# class Child(Template2):
#   pass