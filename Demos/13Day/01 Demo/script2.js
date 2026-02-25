// Named function || Function declaration

// console.log(sum(10,20)) // Hosting
function sum()
{
    var sum = 0;
    for(var i=0; i < arguments.length; i++)
    {
      sum += arguments[i];
    }
    return sum;
}
// console.log(sum())
// console.log(sum(10,20))
// console.log(sum(10,20,30))
// console.log(sum(10,20, 30, 40))

//-------------------
// Function Expression
// greet('Hugh Jackman')

var greet = function(name){
  console.log(`Hello ${name}`)
}
greet('Hugh Jackman')

