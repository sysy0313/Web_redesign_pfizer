// index js
$('#wrap').fullpage({
    scrollBar:true,
    scrollingSpeed:1000,
    navigation:true,
    navigationTooltips:['main','연구제품','제약제품','최신소식','사회공헌']
})
const visual_slide = new Swiper('#visual_slide',{
    autoplay:{
        delay:8000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    effect:'fade',// effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
    
});