const person = {
  firstname: 'Hugh',
  lastname: 'Jackman',
  get fullname(){
    return `${this.firstname} ${this.lastname}`
  },
  set fullname(value){
    const parts = value.split(" ")
    this.firstname = parts[0]
    this.lastname = parts[1]
  }
}

person.fullname = 'Walter Bishop'
console.log(person.fullname)