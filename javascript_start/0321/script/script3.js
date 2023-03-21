const btn1 = document.getElementById('btn1')
console.log(btn1)
console.log(btn1.innerHTML)
//내용변경 == 대입한다 
btn1.innerHTML = '확인완료'
console.log(btn1.innerHTML)

const btn = document.getElementsByClassName('btn')
console.log(btn,btn[0],btn[1],btn[2],btn[3])
btn[0].innerHTML = 'home'
btn[1].innerHTML = 'mail'
btn[2].innerHTML = 'cafe'
btn[3].innerHTML = 'blog'