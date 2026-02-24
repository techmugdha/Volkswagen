// JavaScript Tag selector
const refToAllParagraphs = document.getElementsByTagName('p')

// console.log(refToAllParagraphs[0].textContent)

for(var ele of refToAllParagraphs)
  console.log(ele.textContent)

const refToBody = document.getElementsByTagName('body')
console.log(refToBody)