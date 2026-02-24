const paras = document.querySelectorAll('p')
const refTodiv1 = document.getElementById('div1')

for(var i=0; i < paras.length; i++)
{
  refTodiv1.innerHTML = refTodiv1.innerHTML + "Node name: "+ paras[i].nodeName+ "   ---- value: " + paras[i].textContent + "</br>"
}