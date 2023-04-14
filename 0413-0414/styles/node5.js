//노드생성, 제거  DOM->대상
//DOM.createElement(노드생성 명칭)
//DOM.remove()
//DOMg.removeChild(자식노드)
const p = document.querySelectorAll('p')
const box = document.querySelector('#box')
console.log(p,box)

p[2].remove()
box.removeChild(p[0])

let img = document.createElement('img')
img.alt = '연습 이미지'
// img.src = './image/test.jpg'
console.log(img)

let pTag = document.createElement('p')
pTag.classList.add('a')
pTag.innerHTML = 'p태그 생성'
console.log(pTag)

box.appendChild(pTag)