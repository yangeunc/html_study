//노드관계연습(형제)
//nextSibling, nextElementSibling
//previousSibling,previousElementSibling
const p = document.querySelectorAll('p')  //4
console.log(p[0].nextSibling)  //text 공백을 먼저 인식해서
console.log(p[0].nextSibling.nextSibling) //second 공백다음에는 second가 있으니까
console.log(p[0].nextElementSibling) //second 요소만 인식하고 공백을 인식안하니까

p[1].nextElementSibling.style.color = 'red'  //last 글자색

console.log(p[1].previousElementSibling) //first
console.log(p[2].previousElementSibling.previousElementSibling) //first

p[2].previousElementSibling.style.borderBottom = '5px dashed red'
p[2].previousElementSibling.style.transform = 'skewX(30deg)'
p[1].previousElementSibling.style.borderTop = '5px dotted blue'

let clone1 = p[1].previousElementSibling.cloneNode(true)
console.log(clone1)
let clone2 = p[2].previousElementSibling.cloneNode(true)
console.log(clone2)

p[3].appendChild(clone1)
p[3].appendChild(clone2)