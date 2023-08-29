// index js
$('#wrap').fullpage({
    scrollBar:true,
    scrollingSpeed:1000,
    navigation:true,
    navigationTooltips:['main','연구제품','제약제품','최신소식','사회공헌']
})
// visual_slide
const visual_slide = new Swiper('#visual_slide',{
    autoplay:{
        delay:8000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    effect:'fade',// effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
    
});
// drug_hover
const drug_box = document.querySelectorAll('.drug .contents a')
const hover_p = document.querySelectorAll('.drug .contents a .hover')
const icon_show = document.querySelectorAll('.drug .contents a .icon_show')
const icon_hover = document.querySelectorAll('.drug .contents a .icon_hover')
for(let i of hover_p){i.style.display = 'none'}
for(let i of icon_hover){i.style.display = 'none'}
drug_box.forEach(function(target, index){
    target.addEventListener('mouseover', function(){
        hover_p[index].style.display ='block'
        icon_show[index].style.display = 'none'
        icon_hover[index].style.display = 'block'
    });
    target.addEventListener('mouseout', function(){
        hover_p[index].style.display = 'none'
        icon_show[index].style.display = 'block'
        icon_hover[index].style.display = 'none'
    })
})
//news_slide
const news_slide = new Swiper('#news_slide',{
    autoplay:{
        delay:2000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    effect:'horizontal',// 
    slidesPerView:3,
    spaceBetween:30,
    
});
//contribution_slide
const contribution_slide = new Swiper('#contribution_slide',{
    autoplay:{
        delay:8000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    effect:'horizontal',
    slidesPerView:3,
    spaceBetween:30,
});