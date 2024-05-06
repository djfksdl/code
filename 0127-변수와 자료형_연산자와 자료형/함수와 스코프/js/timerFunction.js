// setTimerout(할일, 시간)
// 시간이 지나면 할일을 표현하는 함수
// 할일 : function(){실제로 할일}     
//      : ()=>{실제로 할일}           화살표함수
// 초 -> ms   1초 -> 1000(ms)   
// 실제로 할일 -> alert('힘들죠?')

// 3초 뒤에 나타난다.
// setTimeout(할일,3000)
// setTimeout(function(){실제로 할일}, 3000)
//  clearTimeout 호출
// let timer = setTimeout(function(){alert('힘들죠?')}, 3000)
// clearTimeout(내가 클리어할 타임함수이름)
// clearTimeout(timer)

// 일정시간마다 할일
// setInterval(할일, 시간)
// clearInterval(변수이름)
let timer2 = setInterval(function(){alert('힘들죠?')},3000)
clearInterval(timer2)
// 조건에 부합하면 클리어 해주기 
// let timer2 하면서 이름주기
