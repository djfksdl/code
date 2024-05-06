//자동변환형
// let userInput = prompt("아무 숫자나 입력하세요")
// document.write(typeof(userInput)+`<br>`);
// prompt에 들어가면 문자가 된다.

// let result;
// result = userInput * 10;
// document.write(result)

// 숫자형 변환하기
// 1. number()
// document.write("<br>"+Number(true))
// document.write("<br>"+Number("20"))
// document.write("<br>"+Number("Hello"))
// not a number라는 뜻 =NaN

// 2. parseInt() parsefloat()
// let bodyHeat = prompt("현재 체온은?") 
// document.write("<br>"+typeof(bodyHeat))
// document.write("<br>"+parseInt(bodyHeat))
// int는 정수의 약자다.
// parseFloat는 소수점까지
// document.write("<br>"+parseFloat(bodyHeat)+"<br>")


// 문자열로 변환하기
// tostring()
let num = 10;
let isEmpty = true;

document.write("<br"+num.toString()+"<br>");
// let numString = num.toString();
// document.write(numString[0]);
// 10이라는 값을 num.toString()에 대입한다. 그래서 10이 되는데 [0]값은 10의 첫번째인 1이 된다.
// 문자열의 배열화표현

document.write(num.toString(2)+"<br>")
document.write(num.toString(8)+"<br>")
document.write(num.toString(16)+"<br>")
document.write(num.toString(10)+"<br>")

// string()
let initValue = null;
// let initValue;
document.write(String(isEmpty)+"<br>");
document.write(typeof(String(isEmpty))+"<br>");

document.write(String(initValue)+"<br>");
document.write(typeof(String(initValue))+"<br>");

document.write(String(num)+"<br>");
document.write(typeof(String(num))+"<br>");

// toString은 메소드 형태 string은 그냥 문자? 

// 함수이름(매개변수)
SubmitEvent(a,b)


