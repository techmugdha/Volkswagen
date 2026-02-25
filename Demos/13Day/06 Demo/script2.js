// setInterval(()=>{
//   let p = document.createElement('p')
//   p.style.color = 'dodgerblue'
//   p.textContent = 'Hello....'
//   document.body.appendChild(p)
// },2000)


//-------------------
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let sp1 = document.getElementById('sp1')
let token = 0

btn1.addEventListener('click',start)
btn2.addEventListener('click',stop)

function start(){
  token = setInterval(greet,3000)
}

function greet()
{
    sp1.textContent += 'Hello...'
}

function stop(){
  clearInterval(token)
  sp1.textContent = ''
}