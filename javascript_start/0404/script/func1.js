const order = document.querySelector('.order')
const result = document.querySelector('#result')
console.log(order,result)
japangi()  //함수호출

order.addEventListener('click',japangi) //주문하기 누를때마다 창 나오게
//함수 부분 문법
//function 함수명() {실행재사용문법}
//함수 생성과 호출은 별개로 처리한다.
function japangi() {
    let menu = window.prompt('주문하시겠습니까?')
    result.innerHTML = `주문하신 ${menu} 나왔습니다.`
}