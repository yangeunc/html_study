//자식들 노드
//childNodes, children, [index]
const box = document.querySelector('#box')
const result = document.querySelector('#result')

console.log(box.childNodes) //공백 포함 자식들
console.log(box.children)  //요소만 인식(자식들)
console.log(box.children[1]) 

box.children[0].classList.add('b')
box.children[2].classList.add('c')

let clone1 = box.children[2].cloneNode(true)
result.insertBefore(clone1, result.firstChild)