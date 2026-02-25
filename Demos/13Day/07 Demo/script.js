// JSON object
let demo1 = {
  name: 'Hugh Jackman',
  age: 27,
  cars: ["BMW","Audi"]
}

let demo2 = '{"name": "Hugh Jackman","age": 27, "cars":["BMW","Audi"]}'

let demo3 = `{
        "name": "Hugh Jackman",     "age": 27,
        "cars":["BMW","Audi"]
        }`

console.log(demo1)
console.log(demo2)
console.log(demo3)
console.log('-------------------')
let obj1 = JSON.parse(demo2)
console.log(obj1)
console.log(typeof obj1)
console.log('-------------------')
let obj2 = JSON.stringify(demo1)
console.log(obj2)
console.log(typeof obj2)

