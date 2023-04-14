//1.오늘의 할일 작성 하고 / 추가하기 누르면 / 콘솔창에 작성한 내용 출력하기
//2.할일 입력안하고 추가 누를 시 '할일을 입력하세요' 안내메시지 출력
//2-2.할일 입력 후 추가 누를시만 콘솔창에 작성 내용 출력하기

const list = document.querySelector('#list')
const list_add = document.querySelector('#list_add')
const list_wrap = document.querySelector('#list_wrap')
let li
console.log(list,list_add,list_wrap)



list_add.addEventListener('click',()=>{
    if(list.value != ''){
        li = document.createElement('li')
        li.innerHTML = list.value + '<button type="button" class="close">X</button>'
        list_wrap.appendChild(li)
        list.value =''

        const close = document.querySelectorAll('.close')
        for(let i of close){
            console.log(close)
            i.addEventListener('click',()=>{
                // i.parentNode.remove()
                i.parentNode.style.textDecoration = 'line-through'
            })
        }
    }else {
        window.alert('할일을 입력하세요')
    }
})
