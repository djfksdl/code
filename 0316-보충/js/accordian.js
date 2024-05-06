$(document).ready(function(){
    $('.question').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle().siblings(".answer").slideUp();
        // 눌렀을때 .next는 li class=answer임. 그걸 토글할때 형제의 앤서는 업한다.
        // siblings는 하나 눌렀을떄 형제들 닫게 하려고
    });
});