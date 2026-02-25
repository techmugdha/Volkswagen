const refbtn = document.getElementById('btn1')

refbtn.addEventListener('click',sayHi)

function sayHi(){
  // alert('Hi there!!') 
  var pTag = document.createElement('p')
  pTag.style.color= 'dodgerblue'
  pTag.innerHTML = '<b>Hi there!!!</b>' 
  document.body.appendChild(pTag)
}

document.addEventListener('click',func1)

function func1()
{
  var pTag = document.createElement('p')
  pTag.textContent = 'You Clicked!!!'
  pTag.classList.add('slide-away')
  document.body.appendChild(pTag)

  // remove pTag after 2 sec delay
  setTimeout(()=>{
    pTag.remove()
  },2000)
}