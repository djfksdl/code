// =======Load Event========
// window.onload = alert("안녕하세요?")
// 여기서 오브젝트는 window다.

// function changeBackground(){
//     document.body.style.backgroundColor="skyBlue"
// }
// 한번만 쓰는게 아닌 자주쓰기떄문에 함수로 이름 쓰여짐. 익명함수 아니다. 

// 요소명.onclick이용하는 방법
// const btn = document.querySelector("button")
// btn.onclick = changeBackground;
// btn.onclick = ()=>{};

// 요소명.addEventlistener() 이용하는 방법
// const btn = document.querySelector("button")
// btn.addEventListener('click',changeBackground)
// btn.addEventListener('click',할일)
// btn.addEventListener('click',()=>{}) 이거 대신에 위에것 씀. changeBackground()로 쓰면 안됨!

const button = document.querySelector("#btn")
btn.addEventListener("click",()=>{
    const word = document.querySelector("#word").value 
    // word에 입력되어있는 값들을 다 가져온다. .value반영됨.
    const result = document.querySelector("#result")
    let count = word.length;
    result.innerText = `${count}`
})

// 워드는 랭스 필요. 값에 랭스 필요하니까. 변수가 카운트안에 들어감. 카운트 갑을 리절트에 가져와서 {이너텍스트는 이 안에 있는걸 집어넣는다는 뜻}