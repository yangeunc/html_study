let money1 =10000
let money2 = 1000
let total = money1 + money2
//객체.메소드()
//객체.toLocaleString('ko-kr')
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
console.log(answer_btn)
console.log(answer_input)
console.log(total)
answer_btn.addEventListener('click',function(){
    console.log(this)
    answer_input.value = `총 ${total_replace}원이 들어있습니다.`
})
