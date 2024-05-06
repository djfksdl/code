// for문
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// 반복된 횟수가 정해져있으면 for문을 씀
// for(let i = 1; i <= 10; i += 2){
//     console.log(i)
// }

// 짝수출력
// for(let i = 2; i <= 10; i += 2){
//     console.log(i)
// }
// 초기값은 0 또는 1로 많이씀.

// for(let i = 1; i <= 10; i ++){
//     if(i%2==0){
//         console.log(i)
//     } 
// }
// 조건식은 결과값이 true,false(=0)다.(i%2)면 0이라서 거짓이 됨. 그래서 실행안해서 홀수만 나온다. 
// for(let i = 1; i <= 10; i++){
//     if(i%2){
//         console.log(i+1)
//     } 
// }
// let이 2번 선언되었는데 왜 정상적으로 실행되냐? : 전역변수 지역변수중 지역변수다. 밖에서 console.log(i)찍어보면 정의 안된다고 뜸. 왜 지역변수임? {}범위 안에서만 for문이 적용이 된다. (스코프)

// while문: 반복횟수가 조건으로 제시되는 경우 정확한 반복 횟수를 모를때 사용함.

// let i =0;
// while(i<=10){
//     console.log("while문 실행", i,"번")
//     i++;
// }

// let fruits = ["banana","apple","mango","pear"]
// console.log(fruits)
// for(let i=0; i< fruits.length;i++ ){
//     // 길이는 0 1 2 3이니 4개라 4다.
// // 윗표현 많이쓰임. 심덱스 넘버를 i로 쓸것이다.
//     console.log(fruits[i])
// }


// forEach문 :배열의 크기가 정해져 있지 않은 경우에 사용한다.
// let fruits = ["banana","apple","mango","pear"]
// console.log(fruits)
// fruits.forEach(function (fruits,index){
//     console.log(`${index}: ${fruits}`)
// })

// 바나나는 인덱스 2개 가져옴 

// for in문 : 객체에서 사용할 수 있는 반복문 , 반복해서 객체의 키값을 가져온다.
// let student = {
//     name: "홍길동",
//     stNum: "g20204723",
//     age: 23,
//     major: "electronic engineering",
//     phone: "01022224444",
// };
// for(key in student){
//     document.write(`${key} : ${student[key]}`)
// }
// 키값을 가져온다. 네임에 대한거. 마지막키와 네임이 같다

// console.log(student["name"])
// console.log(student.name)
// 둘이 같은거임 

//중첩 for문
// for(let i = 2; i <= 9; i++){
//     for(let j = 1; j <= 9; j++){
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }
// ${}안에는 변수 쓰면됨
// ``는 문자열 출력하는 방법. 문자는 그냥 쓰면됨. *,=는 그냥 문자다. 변하는 값(함수,변수)는 ``안에 ${}를 쓰면됨. 

for(let i = 1; i <= 5; i++){ //행
   for(let j = 1; j <= 30; j++){ //열
    document.write("*")
   }
   document.write("<br>")
}

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){ 
     document.write("*")
    }
    document.write("<br>")
}
for(let i = 1; i <= 5; i++){
    for(let j = 5; j >= i; j--){ 
     document.write("*")
    }
    document.write("<br>")
}