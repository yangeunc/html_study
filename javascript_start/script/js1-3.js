//변수
let money1 = 10000
let snack = 2000
let ice = 1000
let total = money1 - snack - ice
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')




//출력
console.log(total)
console.log(money1, snack, ice)
console.log(answer_btn)
console.log(answer_input)
answer_btn.addEventListener('click', function(){
    console.log(this)
    answer_input.value = `남은 돈은 ${total_replace}원 입니다.`
})