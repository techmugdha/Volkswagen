// Object Literal Syntax

var Circle = {
  radius : 1,
  draw : function (){
    console.log('drawing a circle with radius',this.radius) //Method
  }
}

Circle.draw()

var Circle2 = {
  radius : 2,
  draw : function (){
    console.log('drawing a circle with radius',this.radius) //Method
  }
}
Circle2.draw()