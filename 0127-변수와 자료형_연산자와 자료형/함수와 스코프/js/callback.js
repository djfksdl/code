function showData(name, age) {
    alert(`안녕하세요? ${name}님. 나이가 ${age}살이군요. `)
}
function getData(a){
    let userName = prompt("이름을 입력하세요")
    let userAge = prompt("나이를 입력하세요")
    a(userName, userAge);
}
getData(showData);
// 콜백함수는 뭐다? 위에 펑션이 콜백함수개념. 

function sum(a,b){
    let c=a+b
}
sum(10,20)

