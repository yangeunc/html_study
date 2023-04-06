//버튼 클릭 시 prompt 입금액 입력받기
//1번 값 입금액 result1출력하기
//이자 result2 100원 출력하기
//입금액 + 이자 데이터 확인하기 (number인지)
//확인한 데이터 더해서 최종 변수저장하기, 숫자+숫자=숫자
//6번값 total변수에 3자리 콤마 붙여서 출력하기 


const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
const total = document.querySelector('#result')



console.log(result1, result2, total)
console.log(answer_btn)

answer_btn.addEventListener('click',function(){
    // console.log(this)
    let num = window.prompt('입금액을 입력해주세요')
    console.log(Number(result1.value))
    result1.value = num
    result2.value = 100
    total.value = num + 100

    let str_total =Number(result1.value) + Number(result2.value)
    total.value = str_total.toLocaleString('ko-kr')
})