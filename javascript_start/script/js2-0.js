//변수
const answer_btn = document.querySelector('#answer_btn')
const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
//1. answer_btn 클릭했을 때
//2. prompt 값 입력(인증번호)
//3. 2번 값의 데이터타입이 result1 출력
//4. 2번 값의 결과가 result2 출력



//출력
console.log(answer_btn)
console.log(result2, result1)
answer_btn.addEventListener('click', function(){
    let num =window.prompt('인증문자를 입력하세요')
    result1.value=typeof(num)
    result2.value=num
})