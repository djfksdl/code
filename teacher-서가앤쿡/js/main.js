const header = document.querySelector('header'), 
mainMenuList = document.querySelectorAll('.mainmenu'),
subMenu = document.querySelectorAll('.submenu')
// console.log(header, mainMenuList, subMenu)
let headerHeight = header.offsetHeight;
// console.log(headerHeight)
let subMenuHeight = 0;
console.log(subMenu.length)
for(let i = 0; i < subMenu.length; i++){
    if(subMenu[i].offsetHeight > subMenuHeight){
        subMenuHeight = subMenu[i].offsetHeight
    }
}
for(let i = 0; i < mainMenuList.length; i++){
    mainMenuList[i].addEventListener('mouseover',function(){
        header.style.height=headerHeight + subMenuHeight + 22 +'px'
    })
    mainMenuList[i].addEventListener('mouseout',function(){
        header.style.height=headerHeight +'px'
    })
}

// $(document).ready(function(){
//     $(".thum_Swiper > img").click(function(e){
//         e.preventDefault();
//         $('.thum_Swiper > img').toggleClass("gray")
//         $('.thum_Swiper > img i').toggleClass("color")
//     })
// })

// $(document).ready(function(){
//     const G_img = $('thum_Swiper > img') 

//     G_img.click(function(){
//         G_img.style(filter: none;
//             -webkit-filter: grayscale(0);)
//     })
// })