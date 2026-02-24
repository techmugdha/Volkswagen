// Value Types:
// Number, string, boolean, symbol, undefined, null
// value types are copied by their values.

// Reference Type:
// Object, Function, Array
// Objects are copied by their references.

var x = 10; 
var y = x;

x = 20
// console.log(x)
// console.log(y)

//-------------------------

var demo = {
  num:10
}

var test = demo

demo.num = 222

// console.log(demo)
// console.log(test)

//-------------------------

var no = 10 // global
function increase(no)
{
  no++; // local
  console.log(no)// 11
}
increase(no)
console.log(no)//10
//------------------------
var obj = {num1:10} // global
function increase1(obj)
{
  obj.num1++; // local
  console.log(obj)
}
increase1(obj)
console.log(obj)