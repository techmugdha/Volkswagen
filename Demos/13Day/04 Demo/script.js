const person = {
  firstname: "Hugh",
  lastname:'Jackman',
  getfullname: function(){
    console.log(`${this.firstname} ${this.lastname}`)
    // console.log(`${person.firstname} ${person.lastname}`)
  }
}

// window.setTimeout(person.getfullname,3000)
// window.setTimeout(person.getfullname,3000)

// bind() returns a new function, which when called, has its this set to a specific value

var greet = person.getfullname.bind(person)
setTimeout(greet,3000)