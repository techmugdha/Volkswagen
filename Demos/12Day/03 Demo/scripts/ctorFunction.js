// Constructor Function
// Pascal notation
function Circle(radius){
  this.radius = radius,
  this.draw = function(){
     console.log(`Drawing circle with radius ${this.radius}`)
  }
  // return this
}

var c1 = new Circle(30)
c1.draw()

var c2 = new Circle(40)
c2.draw()