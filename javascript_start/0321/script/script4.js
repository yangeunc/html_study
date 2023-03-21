//변수
const more = document.getElementsByClassName('more')
const img = document.getElementsByTagName('img')
const plus = document.getElementsByClassName('plus')
const join_btn = document.getElementById('join_btn')
const li = document.getElementsByTagName('li')
//출력
console.log(more[0])
console.log(img)
console.log(plus[0],plus[1])
console.log(join_btn)
console.log(li[0])
console.log(li[1])
console.log(li[2])
console.log(li[3])
console.log(li[4])
li[0].innerHTML = 'first'

//-----------------style속성---------------------------
//객체.속성
//style  == css
//속성종류 => font-size,color ...
//객체.style.속성 = 값 
more[0].style.color = 'red'
img[0].style.backgroundColor = 'pink'
plus[0].style.backgroundColor ='gray'
plus[1].style.backgroundColor ='#eee'
join_btn.style.backgroundColor = 'coral'
li[0].style.backgroundColor = 'red'
li[1].style.backgroundColor = 'orange'
li[2].style.backgroundColor = 'yellow'
li[3].style.backgroundColor = 'green'
li[4].style.backgroundColor = 'blue'
li[5].style.backgroundColor = 'purple'