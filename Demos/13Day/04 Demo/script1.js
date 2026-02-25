// --- bind()------
var demo = {
  sayhi(fn,ln){
    console.log(`Hi ${fn} ${ln}`)
  }
}

// demo.sayhi('Hugh','Jackman')
// demo.sayhi.bind(demo,'Hugh','Jackman')()

////-----------------------------

var person = {
  getfullname: function(moviecompany,firstappearance){
    console.log(`${this.firstname} ${this.lastname} ${moviecompany} ${firstappearance}`)
  }
}
var person1 = {firstname: 'Bruce', lastname:'Wayne'};
var person2 = {firstname: 'Clark', lastname:'Kent'};

// person.getfullname.bind(person1,'DC','May 1940')()

// person.getfullname.bind(person2,'DC','June 1939')()

//----------- call()------------
person.getfullname.call(person1,'DC','May 1940')

person.getfullname.call(person2,'DC','June 1939')

// -------------- apply()-----------
person.getfullname.apply(person1,['DC','May 1940'])

person.getfullname.apply(person2,['DC','June 1939'])