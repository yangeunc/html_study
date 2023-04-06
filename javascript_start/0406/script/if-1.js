console.log('논리데이터 연습--------------------------')
console.log(true)
console.log(false)
console.log(true+2) //3
console.log(false+10) //10
console.log(typeof true) //boolean (논리데이터)
console.log(typeof false+10) //boolean10
let bo = true+10 //1+10 = 11 이니까 number로 나온다
console.log(typeof bo) //number
console.log(true+null) //null=없음(숫자0으로 인식) //1
console.log(false+null) //0
console.log('비교연산자-------------------------------')
// let a = 10
// let b = 20
// let c = '20'
// let d = 0
// console.log(a,b,c)
// console.log(a==b) //false
// console.log(b==c) //true
// console.log(a!=b) //true
// console.log(b!=c) //true(데이터타입 인식못해서) !부정
// console.log(b!==c) //false
// console.log(a>b) //false
// console.log(a<=b) //true
// console.log(!d) //!는 값을 반전시킨다 0을 반전시켜서 1 //true
// console.log(!b) //false 
// console.log('조건식------------------------------------')
/*
    if(날씨 == '비'){
        우산챙기기
    }
    if(날씨 != '맑음'){ //날씨가 맑지 않으면 
        우산챙기기}
    if(점수 >= 60){자격증합격}
    if(점수 <= 60){재시험}
*/
// let weather = window.prompt('오늘 날씨 어때?')
// if(weather == '비'){ //비라고 써야 우산챙기기창 나옴
//     window.alert('우산챙기기')
// }
let a = true
let b = false
let c = 10
let d = 20
if(a==true){console.log('a는 참이다')}//o
if(c>10){console.log('c는 10보다 크다')} //x c는 10과 같다
if(d<c){console.log('d는 c보다 작다')} //x d는 c보다 크다
if(d<=20){console.log('d는 20보다 작거나 같다')} //x
if(b!=true){console.log('b는 참이 아니다')} //o
