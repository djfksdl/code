// 호이스팅: 함수실행전에 자바스크립트가 미리 변수를 가져가서 (기억)저장을 해 놓음-함수실행전 안에 변수를 범위의 최상단으로 올림(hoisting)
// var a = 1;
// console.log(a);
// console.log(a);
// var a = 1;
// console.log(a);
// ======
console.log(a);
a = 1;
var a;
console.log(a);