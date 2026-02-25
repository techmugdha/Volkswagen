// Function declaration
function sum(a,b)
{
  return a+b;
}
console.log(sum(10,20))

//------------------------
// function expression
var addition = function(a,b)
{
  return a+b;
}
console.log(addition(10,20))

//------------------------

var sayhi= function(){
  return function(){
    console.log('Hi')
  }
}

var newsayhi = sayhi()
newsayhi()

// sayhi()()
//------------------------

// var greet = function(){
//   return function(name){
//     console.log(`Hello, ${name}`)
//   }
// }
// greet()('Bob')
//------------------------
var greet = (function(){
  return function(name){
    console.log(`Hello, ${name}`)
  }
})()
// greet('Bob')

//------------------------
function hifrnd()
{
  console.log('Hi, how are you?')
}
function helloSir()
{
  console.log('Hello, hope you are doing well?')
}
function hitherebuddy()
{
  console.log('Hi there, long time!!!')
}
function waysToGreet(choice,hi,hello,hithere)
{
  if(choice === 1)
    hi() // callback function
  else if(choice === 2)
    hello()// callback function
  else
    hithere()// callback function
}

var ch = 3
waysToGreet(ch,hifrnd,helloSir,hitherebuddy)