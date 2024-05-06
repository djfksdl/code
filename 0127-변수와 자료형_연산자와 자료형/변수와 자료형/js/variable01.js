function add(a, b) {
    let c = a+b;
    return c
    // return a+b;
    // 위에 두줄 말고 return a+b; 로 써도됨.  결과값없으면 계산만하고 결과가 나오지 않음. 그래서 return 써줘야함
}
// function print(){
//     console.log("Hello World!")
// }
// 모든 함수는 ()해줘야함. 여기는 리턴값이 없다. 여기까지만 쓰면 레디상태

// var sum = add(10,20)
// console.log(sum)
// document.write(sum)
// 또는 add(10,20) consol.log(add(10,20)) document.write(sum)
// document써주면 콘솔말고 화면에도 나옴

// 위에 계산으로 하던, 또는

// function print(result){
//     console.log(result)
// }
// var sum = add(10,20)
// 이건 위의 함수 호출. 10+20값인 30을 sum이라는 변수에 집어 넣었다.
// print(sum)
// 출력하기 위해서 print함수 출력할때 결과값을 보여주기 위해 씀.



// console.log(sum);
// var sum =100;
// console.log(sum);
// 위에 30이 이미 처리되어서 30먼저 나오고 100으로 재설정한 값도 써짐

// let sum = add(10,20)
//====== const sum = add(10,20)
// console.log(sum);
// sum =100;
// console.log(sum);
// var는 빨간줄 안떠서 잘 안씀. 그래서 let으로 선언하면 빨간줄 뜨면서 화면에서도 안나옴.(이게 좋은거임) 
// let은 재선언 안되니 두번째 sum =100;앞에는 let선언 하면 안됨. 빼야 빨간줄 없어서 값이 나옴.
// const는..?

let sum = add(10,20)
console.log(sum);
sum = 100;
console.log(sum);
console.log(c)

// 전역변수와 지역변수가 있다.여기는 지역변수로 선언이 되어있어서 값을 불러와도 주의가 뜸. 외부함수라 적용안됨.