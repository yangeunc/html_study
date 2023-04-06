//아메리카노 1개 가격 4700원
const order = document.querySelector('#order') //주문하기
const number = document.querySelector('#number') //수량
const result = document.querySelector('#result') //가격
const reset = document.querySelector('#reset') //취소
console.log(order,number,result,reset)
const price = 4700 //고정가격
let num = 0 //변경 수량 변수(초기값 0)
let total = 0 //변경되는 최종가격 변수 (초기값 0)

function order_add(){
    if(num<10){
        num++
        total = price*num
        number.innerHTML = num
        result.innerHTML = total.toLocaleString('ko-kr')
    }else{
        window.alert('최대 구매수량입니다.')
    }
}
function reset_all(){
    num = 0
    total = 0
    number.innerHTML = num
    result.innerHTML = total
}
order.addEventListener('click',order_add)
reset.addEventListener('click',reset_all)
//--------------------------------------------------
