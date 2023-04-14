//노드 관계 속성
/*
DOM.parents 한단계 앞 부모 인식
DOM.parents.parents 앞 앞 부모 인식
----------DOM 부모 기준 연습+cloneNode() => cloneNode는 메서드이다.
*/
const p = document.querySelectorAll('p')
console.log(p[0].parentNode)
console.log(p[3].parentNode) //4번째 p의 부모를 말하는 것
//객체.속성.속성 = 값

//p의 부모의 배경색을 라임으로
p[0].parentNode.style.background = 'lime'
//p의 부모의 부모의 테두리를 5px 검정으로 주겠다.
p[1].parentNode.parentNode.style.border = '5px solid #000'

//노드 복제(복제)->반복사용 위치 붙여넣기
console.log(p[2].parentNode.cloneNode())//대상만 복제
console.log(p[2].parentNode.cloneNode(true))//대상의 자식, 자손 복제
console.log(p[0].parentNode.parentNode.cloneNode())
console.log(p[0].parentNode.parentNode.cloneNode(true))

let clone1 = p[0].parentNode.cloneNode(true)
let clone2 = p[0].parentNode.cloneNode()
console.log(clone1) //원본 x 복제본o (원본에 영향주지 않음)

//appenChild 마지막 자식 위치에
p[3].appendChild(clone1)
p[2].appendChild(clone2)
console.log(clone2)

/*
객채.속성
객체.속성.함수()
DOM.parentNode 부모
DOM.parentNode.parentNode 부모의 부모
DOM.parentNode.style.속성 = 값 부모에 css 적용하기
DOM.parentNode.cloneNode() 부모 복제(자식,자손 포함 X)
DOM.parentNode.cloneNode(true) 부모 복제(자식, 자손 포함O)
DOM.appenChild(삽입노드) 마지막 자식 위치에 노드 삽입
*/ 