//자식 노드
//nth-child(n), first-child, last-child CSS 비슷
const box = document.querySelector('#box')
const result = document.querySelector('#result')
const p = document.querySelectorAll('p')

console.log(box.firstChild) //공백 포함
console.log(box.firstElementChild) //요소 인식
console.log(box.lastChild)
console.log(box.lastElementChild)

box.firstElementChild.style.transform = 'scaleX(1.5)'
box.lastElementChild.classList.add('a') //box의 마지막자식에 a를 추가   
p[2].previousElementChild.style.border = '5px dotted green'

let clone1 = box.lastElementChild.cloneNode(true)
console.log(clone1)

let clone2 = box[2].previousElementChild.cloneNode(true)

// result.appendChild(clone1) //마지막 자식 추가

//DOM.insertBefore(복제대상,기준위치)
result.insertBefore(clone1, result.firstChild)

// 나는 개똥벌레~~~~~~ 어ㅈ쩔수 없네~~~~~~ 
// 글씨가 너무 큰거 아니니.. 
// 눈이 안 좋은거니..? 
// 괜 찮아..? 
// 짱짴맨 아프지마라
// 나로써는 빨간색이 아주 거슬리는 구나... 키드키귿
// 아아아아아아아아아아아아아아아아앙아아아아앙ㅇㅇ
// 조려졸렬졸렬
// 아이패드 편하니..?
// 맨날 들고 다니기 귀찮을거같은디...box. 
// 오잉 자동완성이 되었네 
// 날ㄴㄹㄴㄹ너리절저햐젛
// 살려줘~~ 이러다 다 죽어~~~~

