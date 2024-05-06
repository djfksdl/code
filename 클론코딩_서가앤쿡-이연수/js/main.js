// gnb 호버시 서브메뉴 슬라이드 다운
const header = document.querySelector('header'), 
mainMenuList = document.querySelectorAll('.mainmenu'),
subMenu = document.querySelectorAll('.submenu')
// console.log(header, mainMenuList, subMenu)
let headerHeight = header.offsetHeight;
// console.log(headerHeight)
let subMenuHeight = 0;
// console.log(subMenu.length)
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

// 삼선 버튼 클릭시 페이드인,아웃
$(function () {
    $('.three-btn').click(function(){
        // e.preventDefault()
        $('.all-menu-mask').fadeIn(500);
        $('.all-menu-wrapper').fadeIn(500);

    });
    $('.all-menu-close').click(function(){
        $('.all-menu-mask').fadeOut(500);
        $('.all-menu-wrapper').fadeOut(500);
    });
})

// 이미지 슬라이드 스와이퍼
var swiper = new Swiper(".thum_Swiper", {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".first_Swiper", {
    speed: 2000,
    autoplay: {
          delay: 5000,
          disableOnInteraction: false
          
        },
    loop: true,    
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) { // type이 fraction일 때 사용
      return '<span class="' + currentClass + '"></span>' +
      '<span class="' + totalClass + '"></span>';
      }
    },
    
  });
   new Swiper(".menu_Swiper", {
    slidesPerView: 1,
    loop: true,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-menu-btn-next",
      prevEl: ".swiper-menu-btn-prev",
    },
  });


// 고탑버튼
$(function () {
    $(window).scroll(function(){
        if($(this).scrollTop()>=300){
            $('.gotop_btn').fadeIn(300)
        }else{
            $('.gotop_btn').fadeOut(300)
        }
        
    })
    $('.gotop_btn').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({scrollTop:0},500)
    })
});
