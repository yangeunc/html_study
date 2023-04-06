const money1 = document.querySelector('#result1')
const money2 = document.querySelector('#result2')
const total =document.querySelector('#result')
const answer_btn = document.querySelector('#answer_btn')


console.log(money1)
console.log(money2)
console.log(answer_btn)
console.log(total)


answer_btn.addEventListener('click',function(){
    // console.log(this)
    console.log(money1.value)
    console.log(typeof Number(money1.value))
    console.log(Number(money1.value)+1)
    console.log(typeof Number(money2.value))
    total.value = Number(money1.value) + Number(money2.value)
    console.log(total)


    let str_total = Number(money1.value) + Number(money2.value)
    total.value = str_total.toLocaleString('ko-kr')
})
