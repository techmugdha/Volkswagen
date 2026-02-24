// JS Selector by id

const refTop2 = document.getElementById('p2')

refTop2.textContent = "Hugh Jackman"

refTop2.style = "font-family: cursive;"
// ip1 = prompt('Enter color choice:')
// // console.log(ip1)
// if(ip1 === "1") 
//   refTop2.classList.add('max')
// else if(ip1 === "2")
//   refTop2.classList.add('min')

function changeParaUI(){
  ip1 = prompt('Enter color choice:')
  console.log(ip1)
  debugger
  if(ip1 === "1") 
    refTop2.classList.add('max')
  else if(ip1 === "2")
    refTop2.classList.add('min')
}

document.body.style = "background-color:darkgray"
