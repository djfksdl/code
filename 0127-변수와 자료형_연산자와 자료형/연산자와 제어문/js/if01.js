// let score = prompt("프로그래밍점수 : ")
// score = parseInt(score);

// if(score >= 70){
//     console.log("합격")
// }else {
//     console.log("불합격")
// }    
// else하고 안띄워도됨. 가독성으로 많은 사람들이 이렇게 씀. 또 else에서 {}뻬도됨.한개 이상이면 어차피 써야하니 {}쓰는 습관으로 하자

// let score = prompt("점수 :")
// score = parseInt(score);

// if(score >= 90){
//     console.log("A학점")
// }  
// else if(score >= 80){
//     console.log("B학점")
// } 
// else if(score >= 70){
//     console.log("C학점")
// } 
// else if(score >= 60){
//     console.log("D학점")
// }else {
//     console.log("F학점")
// }

// if(조건문){
//     실행문1
// }else {
//     실행문2
// }
// 조건문이 참이면 실행문1을 실행하고 , 그렇지 않으면 실행문2를 실행해라.

// if(조건문1){
//     실행문1
// }else if(조건2){
//     실행문2
// }
// .
// .
// .
// else {
//     실행문3
// }
// 조건1이 참이면 실행문1, 조건2가 참이면 실행문2, 그외에는 실행문3을 실행해라


let age = prompt("당신의 나이는 몇살인가요?")
age = parseInt(age);

// if(age > 20){
//     console.log("운전이 가능합니다.")
// }else if(age >= 18){
//     console.log("오토바이 운전이 가능합니다.")
// }else{
//     console.log("운전이 불가능합니다.")
// }
// 값이 높거나 차례대로 하는것이 좋다. 아닌경우에도 가능하긴만&&같은 조건이 추가로 붙는다.
// if(age >= 18 && age < 20){
//     console.log("오토바이 운전이 가능합니다.")
// }if(age > 20){
//     console.log("운전이 가능합니다.")
// }else{
//     console.log("운전이 불가능합니다.")
// }
    
// 18<=age<20이란건 존재하지 않음. 좌항=우항이어야하기때문에 인식 못함


let liecense = prompt('운전면허증이 있나요?')
if(age > 20){
    if(liecense == "yes"){
        console.log("운전가능")
    }else {
        console.log("면허증을 따세요")
    }
}else {
    console.log("운전이 불가능합니다.")
}

// (조건식)? 실행문1 : 실행문2
let score = prompt("프로그래밍점수 : ")
score = parseInt(score);

// if(score >= 70){
//     console.log("PASS")
// }else {
//     console.log("FAIL!!!")
// }

// (조건식)?참값 : 거짓값
(score = )