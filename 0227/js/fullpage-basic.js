// 홈페이지에서 긁어온 초기화설정복사
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4','page5'],
		//options here
		autoScrolling:true,
		// scrollHorizontally: true
		sectionsColor: ['#ccc','#bbb','#999','#888','#333'],
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['메뉴1','메뉴2','메뉴3','메뉴4','푸터'],
		slidesNavigation: true,
		afterLoad: function(anchorLink, index){
			console.log('현재 섹션 번호는' + index)
			if(index == 5){
				alert('마지막 섹션입니다.')
			}
		},
		afterSlideLoad: function(anchorLink, index , slideAnchor, slideIndex){
			console.log('현재 활성화된 슬라이드번호는'+ slideIndex)
		}
	});

	// methods
	// $.fn.fullpage.setAllowScrolling(true);
	// 처음에 false로 나오는데 true로 바꿔야함 스크롤링을 허락하는 방법이니까(안그럼 화살표로밖에 작동안됨)
	// 아니면 주석처리해서 없애기
});