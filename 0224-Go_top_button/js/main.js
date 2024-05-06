$(function () {
    // 윈도우에 스크롤이 300PX이상 생기면 go-top이 나타난다.
    $(window).scroll(function(){
        if($(this).scrollTop()>=300){
            // this는 윈도우다.
            // go_top(화살표버튼)이 나타난다.
            // $('.go_top').show(300)
            $('.go_top').fadeIn(300)
            // show는 크기가 커진다. fade는 서서히 나타남
        }else{
            // go_top(화살표버튼)이 숨는다.
            $('.go_top').fadeOut(300)
        }
        
    })
	// go_top 버튼을 클릭하면 html, body의 스크롤이 0으로 간다. .5s동안
    $('.go_top').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({scrollTop:0},500)
    })
});
