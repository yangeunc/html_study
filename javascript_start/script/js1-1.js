//answer_btn
//answer_input
//day1
//day2
//day3
//total
//변수
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
let day1 = 10
let day2 = 5
let day3 = 8
let total = day1+day2+day3
//출력
console.log(answer_btn)
console.log(result)
console.log(total)
//객체.속성 -> 속성을 읽는다
//객체.속성 = 변경값 
//length, innerHTML, style

// 요소.addEventListener(이벤트종류, 함수실행 및 호출);
answer_btn.addEventListener('click',function(){
    //이벤트 조건 만족 시 실행 결과
    // console.log(this)
    answer_input.value = `결과는 ${total}장입니다.`
})