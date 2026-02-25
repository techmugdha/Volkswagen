let jsondataURL = 'http://127.0.0.1:5500/08%20Demo/data.json';

function GetData()
{
    let helper = new XMLHttpRequest()

    // Define a callback function to retrive the data in our js code.
    // readyState = 0
    helper.onreadystatechange = ()=>{
      if(helper.readyState === 1)
      {
        console.log(`httpReuest packet creation is done :: ${helper.readyState}, statusCode: ${helper.status}`)
      }
      if(helper.readyState === 2)
      {
        console.log(`httpReuest packet sent :: ${helper.readyState}, statusCode: ${helper.status}`)
      }
      if(helper.readyState === 3)
      {
        console.log(`waiting for HTTPResponse packet :: ${helper.readyState}, statusCode: ${helper.status}`)
      }
       if(helper.readyState === 4)
      {
        console.log(`HTTPResponse packet is received by browser:: ${helper.readyState}, statusCode: ${helper.status}`)
      }

    }

    // To configure http method: GET, POST, PUT, DELETE, URL
    // browser to create now HTTP Request Packet
    helper.open('GET',jsondataURL)

    // telling browser to send HTTP Request Packet to server side
    helper.send()
}