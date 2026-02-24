const person = {
  fnm:'Hugh',
  lnm:'Jackman',
  details(){
    console.log(`${this.fnm} ${this.lnm}`)
  }
}
// person.details()
const another = {hobby:'coding'}
// another.color = 'purple'
// delete another.color
// console.log(another)
//------------------------------
// for(var key in person)
//   another[key] = person[key]

// console.log(another)

// another['color'] = 'blue'
// console.log(another)

//-----------------------
const obj = {num: 1234}

// const another_person1 = Object.assign(another,person,obj)
// console.log(another_person1)

// const another_obj = Object.assign({arr:[1,2,3,4]},obj)
// console.log(another_obj)

//-----------------------------

// Spread operator: ... operator
// const another_obj2 = {...person}
// console.log(another_obj2)

// const another_obj3 = {...person,...obj}
// console.log(another_obj3)

// const demo = {demo:'abcd'}
// const another_obj4 = {...person,...obj,demo}
// console.log(another_obj4)

///---------------------

var arr1 = [1,2,3,4,5]
var colors = ['red','orange']

var new_arr= [...arr1,...colors]
console.log(new_arr)

