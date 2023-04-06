//출금하기 버튼 클릭하면
//얼마 출금하시겠습니까? 나오고
//3자리 간격 콤마 ?00,000원 출력되었습니다.
//(선택) 남은 잔액은 ?????원 남았습니다.
const order = document.querySelector('.order')
const result = document.querySelector('#result')
console.log(order,result)
let total = 10000000000000000000000000000000
atm()


order.addEventListener('click',atm)


function atm() {
    let money = window.prompt('얼마를 출금하시겠습니까?')
    money = Number(money)
    let cash = total-money
    result.innerHTML = `${money.toLocaleString('ko-kr')}원 출력되었습니다.<br>남은 잔액은 ${cash.toLocaleString('ko-kr')}원 남았습니다.`
}
//let money = Number(window.prompt('출금액))
//let money_type = money.toLocaleString('ko-kr')
//result.innerHTML = `${money_type}원 출금완료`
//let bank_total = bank - money
//result.innerHTML += `잔액은 ${bank_total.toLocaleString('ko-kr)}원 입니다.`