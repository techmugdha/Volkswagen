const container = document.createElement('div')
const p = document.createElement('p')
p.textContent = "Hugh Jackman"
p.style="color: red;"

const child2 = document.createTextNode("How are   you?")

const sp = document.createElement('span')
sp.innerHTML = '<br/><br/><b>Some important text</b>'

container.appendChild(p)
container.appendChild(child2)
container.appendChild(sp)

document.body.appendChild(container)

const list = container.childNodes
for(const entry of list.entries())
{
  console.log(entry)
}