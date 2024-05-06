// let sum = "합계"
// function send(){
//     alert('경고')
// }
// send();
// send는 실행하기위한 함수다. return값 없음

// 함수명: Sum()
// 매개변수: a,b
// 함수의 기능: 숫자 합하기

// function sum(a,b){
//     let c =  a + b;
//     console.log(c)
// }
// sum(10,20)
// 30이라는 값은 없다. 출력되고 끝이다. 이 함수의 기능은!
// 입력값은 있는데 출력값이 있다


// 함수명: Sum()
// 매개변수: a,b
// 함수의 기능: 숫자 합하기
// 결과값 return

let result = function sum(a,b){
    let c = a+b;
    return c
}
// let result = sum(10,20) 이거랑 합한거다. let result = 부분.
console.log(result)
// 또는 consol.log(sum(10,20))
// console.log(c) 중괄호 안에 있는 함수 스코프함수 그 안을 벗어나지 못하는 지역변수다.변수선언이 {}안에서 되면 그안에서만됨. 따라서 이건 값이 안나옴

// 얘는 30이라는 값을 가지고 있다.