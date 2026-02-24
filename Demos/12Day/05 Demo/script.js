// const person ={age: 55}

// p2 = {pname:"Hugh"}
// person = p2

// console.log(person)
// console.log(p2)

// const x = 55
// x = 20
//---------------------------

const person ={
  pname:"Hugh Jackman",
  page : 55,
  paddress:{
    hno: 221,
    street: 'Baker Street',
    city: "London"
  },
  person_details(){
    console.log(`Nm:${this.pname}, Age: ${this.page}, Address: ${this.paddress.city}`)
  }
}

// person.person_details()

person.occupation = "Actor"
// console.log(person)

// delete person.page
// console.log(person)

//-------------------------

// for(var key in person)
//   console.log(key,person[key])


// for(var key in person.paddress)
//   console.log(key,person.paddress[key])

//---------------------------

// p = [1,2,3,4,5]
// for(var ele of p)
//   console.log(ele)

//---------------------------

// for(var key of Object.keys(person))
//   console.log(key,person[key])

// for(var entry of Object.entries(person))
//   console.log(entry)
//------------------
delete person.pname
if('pname' in person)
  console.log('yes')
else
  console.log('no')

