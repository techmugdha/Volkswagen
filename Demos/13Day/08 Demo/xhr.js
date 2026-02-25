let jsondataURL = 'http://127.0.0.1:5500/08%20Demo/data.json';

function GetData()
{
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange =()=>{
    if(xhr.readyState === 4 && xhr.status === 200)
    {
      let stringdata = xhr.responseText
      let jsondata = JSON.parse(stringdata)
      // console.log(jsondata)
      showData(jsondata)
    }
  }
  xhr.open('GET', jsondataURL)
  xhr.send()
}

function showData(data)
{
  debugger
  // let divref = document.getElementById('container')
  // let refToTBody = document.getElementsByTagName('tbody')
  // refToTBody[0].innerHTML = data.map((element)=>{
  let refToTBody = document.querySelector('#container tbody')
  refToTBody.innerHTML = data.map((element)=>{
    return (`
    <tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.role}</td>
    </tr>
    `)
  }).join('')
}