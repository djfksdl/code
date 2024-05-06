const box = document.querySelector("#box")

// box.addEventListener('click',(e)=>{
//     console.log(`이벤트 발생위치 : ${e.pageX}, ${e.pageY}`)
// })
// e는 addEventListener에서 주는 값이다. 그걸 익명함수e가 받음. 매개변수라서 마음껏 적어도됨.
// box.addEventListener('mousemove',(e)=>{
//     // e.preventDefault();
//     console.log(`이벤트 발생위치 : ${e.pageX}, ${e.pageY}`)
// })
box.addEventListener('click',(e)=>{
    e.preventDefault();
    // Default 태그는 하는 기본 기능을 막아주는 의미다. a태그에 많이 씀
    console.log(`이벤트 발생위치 : ${e.pageX}, ${e.pageY}`)
})

