// "use strict"

// sayhi()
// function sayhi()
// {
//   console.log('hi')
// }

//-----------

// let x = 10
// console.log(x)
// let y = 11
// y =2

//--------------
let numbers = [1,2,3,4,5]
let double = numbers.map((n)=>{
  return n * 2
})
// console.log(double)

// let filteredno = numbers.filter()

//--------------

var person = {
  fn : 'Hugh',
  ln :'Jackman',
  getdetails: function(){
    console.log(`${this.fn} ${this.ln}`)
  },
  details : (fn,ln) =>{
    console.log(`${fn} ${ln}`)
  }
}

person.getdetails()
person.details('Peter','Bishop')
// 

var greet = (name)=>{
  console.log(`Hello, ${name}`)
}
greet('Peter')