// =======datatype1.string=======
// let password = "passworld1234"
// 문자와 숫자 합해진건 문자다
// console.log(password);
// console.log(typeof(password));

// ======문자형 숫자=======
// let password = "123" + 1
// console.log(password);
// console.log(typeof(password));
// +개념은 붙인다는 개념. /*-는 연산이 됨. 그때는 string이 아닌 number가 됨. 그러나 +는 그냥 붙음.
// let c = "123"*10
// console.log(c);
// console.log(typeof(c));

// ========datatype2. number====
// let password = 123
// let password = -123
// let password = -123.456
// console.log(password)
// console.log(typeof(password))


// =====datatype3. boolean====
// let password = false
// console.log(password)
// console.log(typeof(password))


// =====datatype4. array(배열)===
let fruite1 = "banana"
let fruite2 = "apple"
let fruite3 = "mango"
let fruite4 = "grape"
console.log(fruite1,fruite2,fruite3,fruite4)
// 이렇게하면 시간도 오래 걸리고 변수가 많아 불편하다.

// 배열 - 관련된 데이터를 하나의 변수안에 저장하는 느낌
let fruite = ["banana", "apple", "mango","grape"]
// 집합은 {}써야함. 그러나 여기선 []씀. 데이터를 같이 모아놓은것.호텔명, 1,2,3,4호실(인덱스 넘버 0부터 시작.컴퓨터는 0부터 시작함)
console.log(fruite);
console.log(fruite[1]);
fruite[0]="cherry"
console.log(fruite);

// =====datatype5. object(객체)===
// 학생정보는 다양하므로 배열보다는 object로 쓰는게 좋다.
let student = {
    name: "홍길동",
    // 객체는 키(name)와 키값(홍길동)으로 구성되어있는데 이걸 {}로 모은다.
    stNum: "620204756",
    age: 23,
    major: "electronic engineering",
    phone: "01033339999"
}
// 여긴 {}들어감
console.log(student)
console.log(student.name);
console.log(student.age);
console.log(student["age"]);
// age두번째것보다 첫번째거를 많이 씀. 둘이 같은거임
// 객체정보 수정
student.name = "고길동"
student.age = "21"
console.log(student)

// 학생들의 목록을 배열로 만들 수 있다.
// let studentList =[{name: "홍길동",stNum: "620204756",age: 23,major: "electronic engineering",phone: "01033339999"},
// {name: "이길동",stNum: "620204756",age: 21,major: "electronic engineering",phone: "01033339999"},
// {name: "김길동",stNum: "620204756",age: 22,major: "electronic engineering",phone: "01033339999"}]
// console.log(studentList) 
// console.log("첫번째 학생은",studentList[0].name,"입니다.") 
// console.log("첫번째 학생은"+ studentList[0].name +"입니다.") 



// 환자목록
let patientList =[{name: "김가나", age: 20, NoD: "headache", Number: "940909-1234567", sex: "여성", address: "대구 효목동" },
{name: "이다라", age: 20, NoD: "covid-19", Number: "940909-1234567", sex: "남성", address: "대구 송현동" },
{name: "박마바", age: 20, NoD: "diabetes", Number: "940909-1234567", sex: "여성", address: "대전 관평동" },
{name: "최사아", age: 20, NoD: "asthma", Number: "940909-1234567", sex: "남성", address: "대전 송강동" },
]
console.log(patientList)
console.log("첫번째 환자는 " + patientList[0].NoD +", " + patientList[0].age + "세 " + patientList[0].sex +"환자 "+ patientList[0].name + " 입니다.")

console.log(`두번째 환자는 ${patientList[1].NoD}, ${patientList[1].age}세 ${patientList[1].sex}환자 ${patientList[1].name} 입니다.`)