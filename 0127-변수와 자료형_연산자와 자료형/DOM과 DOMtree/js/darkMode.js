const btn = document.querySelector("button")
// 태그명이니 .,#안찍음!

btn.addEventListener('click',function(){
    document.body.classList.toggle("dark")
})