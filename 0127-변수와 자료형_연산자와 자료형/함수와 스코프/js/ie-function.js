// (function(a,b){
//     let sum = a + b;
//     console.lof(`함수 실행 결과 : ${sum}`)
// })(10,20)
// ()를 넣어줘야함-->즉시실행함수!
// a,b는 매개변수다. 인수는 어디? 뒤에 집어 넣어야함.a에 10, b에 20들어감

// =====변수 할당 함수====
// let hap= function(a,b){
//     let sum = a + b;
//     console.log(`함수 실행 결과 : ${sum}`)
// }
// hap(100,200);      <<엔터쳐야함!!

// let hap = (매개변수)=>{할일}
// ==화살표 함수 표현 ==
// let hap = (a,b) => {
//     let sum = a + b;
//     console.log(`함수 실행 결과 : ${sum}`)
// } 
// hap(100,200);

// ====화살표 함수 표현====
// (매개변수) => {할일}(인수);
// 맨위의 식과 같음. 엄청 많이씀!! 

//  ((a,b) => {
//    let sum = a + b;
//    console.log(`함수 실행 결과 : ${sum}`)
//  })(10,20);




// (function(){
//     let username = prompt("이름을 입력하세요.")
//     alert(`${username}님, 안녕하세요?`)
// })();

// 화살표 함수로 바꾼 표현!
// (() => {
//     let username = prompt("이름을 입력하세요.")
//     alert(`${username}님, 안녕하세요?`)
// })();

// let result =() =>{
//     let username = prompt("이름을 입력하세요.")
//     alert(`${username}님, 안녕하세요?`)
// }
// result();