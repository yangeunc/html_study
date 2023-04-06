//1. 사용자 아이디 확인
let userId = 'admin'
if(userId =='admin'){
    console.log(`${userId}님 어서오세요`)
}
//2. 사용자 숫자를 입력 -> 짝수면 -> 당신이 좋아하는 숫자는 짝수입니다.
let userNum = 6
if(userNum%2 == 0 ){ //2로 나눈 나머지값이 0일때
    console.log('당신이 좋아하는 숫자는 짝수입니다.')
}
//3. 나이 입력 -> 10살 이상이면 탑승가능 놀이기구
let userAge = 10
if(userAge >= 10){
    console.log('탑승 가능')
}
//4. 24시간 기준 현재 시간 입력
//12시 이후면 '오후 ?시 입니다.'
let time = 14
if(time >= 12 ){
    console.log(`오후 ${time}시 입니다`)
}
//------------------------------------------------------------
let print = window.confirm('인쇄될까요?')
console.log(print)
if(print){
    window.print()
}