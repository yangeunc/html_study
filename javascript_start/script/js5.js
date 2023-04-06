//1. 아이디를 안적고 로그인 누를 시 
//'아이디를 입력하세요' 라고 나오게 하기 #error_result
let error_result = document.querySelector('#error_result')
let user_id = document.querySelector('#user_id')
let login_btn = document.querySelector('#login_btn')
console.log(error_result,user_id,login_btn)

login_btn.addEventListener('click',()=>{
    if(user_id.value == ''){
        error_result.innerHTML = '아이디를 입력하세요'
    }
})