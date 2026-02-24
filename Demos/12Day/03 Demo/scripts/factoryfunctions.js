// Factory Pattern: which produces objects
// Factory Function Syntax
// roseLilyOrange: camel notation 
function createCircle(radius){
  return {
    radius,
    draw(){
      console.log(`Drawing circle with radius ${radius}`)
    }
  }
}

var c1 = createCircle(10)
c1.draw()
var c2 = createCircle(20)
c2.draw()