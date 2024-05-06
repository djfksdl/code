// 콜백함수 사용 안한경우
// function add(x,y){
//     return x+y
// }

// function printResult(result){
//     console.log(result)
// }
// printResult(add(10,20))
// 모든 함수는 괄호를 해야한다. 콜백함수는 매개변수역할로 들어가야함. 그래서 괄호를 안함. 


// 콜백함수 사용 한경우 = printResult를 콜백함수로 사용
// add함수의 3번째 파라미터가 callback함수이고, callback대신 매개변수 붙이듯 자유럽게 콜백함수이름을 붙여도됨 (ex. callback ===>print)

function add(x,y,callback){
    let c = x + y;
    callback(c)
}
function printResult(result) {
    console.log(result)
}
callback(100,200,printResult)
// printResult가 맨밑에 들어가고 맨위로가서 callback에 가서 호출된다.


//콜백함수를 이용한 비동기처리
//콜백함수는 주로 비동기처리에 사용된다.
//비동기(Asynchronous)란 특정 코드의 실행이 끝날 때까지 기다리지 않고,다음 코드로 바로 넘어가는 것을 의미한다.

function callBackTestFunc(callback){
    setTimeout(callback,5000);
    console.log("Hello")
}
// function print(){
//     console.log("watied 1second")
// }

// callbackTestFunc(print)

// 익명함수 사용예시
callBackTestFunc(() => {
    console.log("waited 1second")
})