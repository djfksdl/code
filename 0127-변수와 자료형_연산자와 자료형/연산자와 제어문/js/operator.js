// ====basic operator=====
// let password = 1+2
// let password = 1
// password = password + 2
// password = password - 2
// password = password * 2
// password = password / 2
// password = password % 2

// console.log(password);
// =======comparsion operator====
// let password = "2";
// let result;
// result = password < 2
// // 크다 작다할때 좌항이 기준이다. <=작거나 같다. >=크거나 같다.

// result= password =>2
// 크거나 같다로 해야함. 위에것은 안됨
// result = password >= 2
// result = password <= 2
// result = password != 2
// // false/ 다르다
// result = password !== 2
// // true 나옴
// console.log(result)
// result = password > 2
// result = password == 2
// // true로 나오는데 /=는 최소 2번은 써야 같다고 잉ㄴ식
// console.log(result)
// result= password === "2"
// // 그냥 2로 하면 false나옴. 3개까지 쓰면 타입도 따짐. 까다롭다.
// console.log(result)

// result = password >=3 || password < 1
// // ||는 or의 뜻: 모든 조건들중 하나라도 참(true)면 결과값도 참(true)
// result = password >=3 && password < 1
// // ||는 and의 뜻: a모든 조건들이 참(true)이면 결과값도 참(true)

// 증감연산자
let a = 10
a++;
// a = a + 1
a += 1 
// a = a + 1 
console.log(a)
let b = 10
b++;
console.log(b)

// 증감연산자2
let x=10, y=4, result;
result = ++x+y--
//  --: 3 
// ++부터 계산함. 11+4=15가됨.
console.log(result)
console.log(y)
// x+y값이 들어가고 이후에 y에 -1을 해준것?
