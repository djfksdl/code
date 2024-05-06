// id로 요소를 불러오기

let firstTitle = document.getElementById('title')
console.log(firstTitle)


// class명으로 요소를 불러오기
let myList = document.getElementsByClassName('list')
console.log(myList.length)
// class라고 여기서는 .찍지말기 Class이미 있으니까! 이런 말 없을때는 .list라고 점 찍긴해야함. 위에 id #도 마찬가지


// 태그명으로 요소를 불러오기
let paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)


// css상의 선택자를 이용하여 불러오기(선택자를 많이 쓰긴함)
let myList2 = document.querySelector('.list .red')
console.log(myList2)
myList2.style.color = "red"
// 계속 들어가는식. css요소는 style이 키값으로 가지고 있다. 객체 스타일이다.
firstTitle.style.display = "none"
// 변수에 왜 집어 넣음? 뒤에 긴 document~red')해도 결과는 같긴함. 속도차이가 나기 때문에 좋은 방법 아님. 할때마다 스캔을 해야함. 변수로하면 돔트리 스캔 안해도됨(?)

// myList.style.color = "red"  적용안됨
// myList[0].style.color = "red"
// myList[1].style.color = "red"
// myList[2].style.color = "red"
// 배열로 나열되어있음. 
// for 반복문을 쓴다.
for (let i =0; i<myList.length; i++){
// 나중에 추가될 수도 있는데 그냥 i<=3으로 쓰면 안됨!
    myList[i].style.color="red"
}
// const가 좋다. let보다