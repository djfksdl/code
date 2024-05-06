const title = document.querySelector("#title")
// 변수랑 이름같아도 되긴함. 혼선이 있을순 있지만(title)
// #title의 모든 값이 title에 들어간다. 
const dp = document.querySelectorAll("#desc p")
console.log(dp)
// 이걸로 디버깅 찾아보기
//방법1
// title.onclick = ()=>{
//     title.style.backgroundColor = "yellow"
// }
// title.ondblclick = ()=>{
//     title.style.backgroundColor = "green" 
// }

//방법1-2
// title.onclick = ()=>{
//     title.classList.add("clicked")
// }
// // class리스트에 보관된 정보에 clicked를 추가하겠다. h1의 class명에 "clicked"라고 생기는것이 add다.
// title.ondblclick = ()=>{
//     title.classList.remove("clicked")
// }
// 매소드중에서는 add와 remove가 있다.

// 방법1-3
// title.onclick = ()=>{
//     title.classList.toggle("clicked")
// }
// 결과값없고 실행함

// 방법2-1
title.onclick = () =>{
    let click = title.classList.contains("clicked")
    // 클리안에 메소드가 있다. 클릭드라는 클래스명이 있냐? 있으면 true나옴
    // 여기는 결과값이 있다. 있으면 true없으면 fulse로 나옴. 
}
// 방법2-2
title.onclick = () =>{
    let on = title.classList.contains("clicked")
    if(!on){
        title.classList.add("clicked")
    }else{
        title.classList.remove("clicked")
    }
    // !는 not의 의미다. !on은 없다면이라는 뜻
    // 토글보다도 2-2 방법 많이 씀. 물론 상황마다 써야하는게 다를때도 있긴함. 
}

// function이라는 말이 버젼 5에 있으면 들어가고 아니면 빠짐 
// 익명함수의 화살표함수 () => {}


// 변수랑 이름같아도 되긴함. 혼선이 있을순 있지만(title)

dp.onclick = () =>{
    let on = dp.classList.contains("blue")
    if(!on){
        dp.classList.add("blue")
    }else{
        dp.classList.remove("blue")
    }
}

// ====이거 따로 해보기.  all썼을때 되는거 for문으로
let dp = document.querySelectorAll('#desc p')
console.log(dp)
dp[0].style.color = "#8ddfff"
dp[1].style.color = "#8ddfff"
dp[2].style.color = "#8ddfff"
for (let i =0; i<dp.length; i++){
    dp[i].style.color="#8ddfff"
} 