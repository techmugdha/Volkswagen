// JS Closure: closure is a function that has access to its outer function scope (parent function scope) even after the outer function has returned/ closed

var add = (function(){
  var counter = 0; // private variable
  return function(){
    counter += 1;
    return counter // inner function is a closure that has access to the counter variable
  }
})()

console.log(add())
console.log(add())
console.log(add())
console.log(add())

