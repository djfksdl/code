const btn=document.getElementById('submit'),
      container = document.querySelector('.container')
//   줄은 맞춰주기. 굳이 새로 안쓰고 이어서 써도됨. 
// 할일(함수) = function(){}
// 화살표함수로 바꾸면   ()=>{}
// btn.addEventListener('click',할일)
btn.addEventListener('click',function(){
    btn.style.color = "red"
    console.log('버튼이 클릭되었습니다.')
})
// 귀기울일 이벤트 적고 할일 적으면 됨 /한번만 쓸거라 함수명은 없다. 

container.addEventListener('mouseenter',()=>{
    console.log('마우스가 들어왔음')
})
container.addEventListener('mouseleave',()=>{
    console.log('마우스가 떠났음')
})
window.addEventListener('keydown',function(event){
    console.log(event.key)
    console.log(event.keyCode)
})
// 키 정보를 다 가져온다. 키다운은 키보드 관련. 