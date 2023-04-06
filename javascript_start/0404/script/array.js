let study = ['html','css','js','jq','sass','git']
let device = ['desktop','tablet','mobile','tv']
let weather = ['맑음','비','눈','흐림','태풍']
let num = 0
console.log(study,device.weather) //6,4,5
//---------------------------------배열속성 및 메서드()
console.log(Array.isArray(study))  //true(배열이다)
console.log(Array.isArray(device)) //true
console.log(Array.isArray(weather)) //true
console.log(Array.isArray(num)) //false
//---------------------------------변수.pop
// console.log(study.pop())
// console.log(study)
// console.log(study.pop())
// console.log(study)
//---------------------------------변수.shift
console.log(study.shift())
console.log(study)
//---------------------------------변수.unshift
study.unshift('html5')  //html5 추가
console.log(study)
study.pop()
console.log(study)
//---------------------------------변수.push
study.push('github')
console.log(study)
//---------------------------------변수.concat
// study.concat(device)
console.log(study.concat(device))
console.log(device.concat(study))
//---------------------------------변수.reverse
study.reverse()
console.log(study)
//---------------------------------변수.sort
device.sort()
console.log(device)
//---------------------------------변수.slice
console.log(weather.slice(0,2))
console.log(weather.slice(1,3))
console.log(weather.slice(0,-3))
console.log(weather.slice(0))
console.log(weather.slice(2))
console.log(weather.slice(-1)) //마지막값만 표시
//---------------------------------변수.splice
// let weather = ['맑음','비','눈','흐림','태풍']
// weather.splice(0,2)
weather.splice(0,2,'sunny')
console.log(weather)
//---------------------------------변수.join
let yoil = ['월','화','수','목','금','토','일','']
console.log(yoil.join('요일 '))
console.log(yoil.join('/'))
console.log(study.join('과목'))
