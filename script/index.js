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
    on:{
        init:function(){
            //슬라이드가 변경되기 전 초기 실행함수
            this.slides[this.activeIndex].querySelector('.visual_txt span').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.visual_txt em').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.visual_txt span').style.transform = 'translateX(0)'
            this.slides[this.activeIndex].querySelector('.visual_txt em').style.transform = 'translateX(0)'
        },
        slideChange:function(){
            //슬라이드 변경될 때 인식되는 실행함수
            //1. 활성화 전 모든 슬라이드 opacity:0; 만들기
            this.slides.forEach(target => {
                target.querySelector('.visual_txt span').style.opacity = '0'
                target.querySelector('.visual_txt em').style.opacity = '0'
                target.querySelector('.visual_txt span').style.transform = 'translateX(80px)'
                target.querySelector('.visual_txt em').style.transform = 'translateX(80px)'
            })
            //2. 활성화 슬라이드만 opacity:1
            this.slides[this.activeIndex].querySelector('.visual_txt span').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.visual_txt em').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.visual_txt span').style.transform = 'translateX(0)'
            this.slides[this.activeIndex].querySelector('.visual_txt em').style.transform = 'translateX(0)'
        }
    },
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
    pagination: {
        el: '#contribution_slide .swiper-pagination',
    },
});
// 스크롤트리거
gsap.fromTo('.research .container', {
    //from
    opacity:0,
    x:400, 
},{
    //to
    opacity:1,
    x:0,
    duration:1.5,
    scrollTrigger:'.research'
}
);
gsap.fromTo('.drug .container', {
    //from
    opacity:0,
    x:400, 
},{
    //to
    opacity:1,
    x:0,
    duration:1.5,
    scrollTrigger:'.drug'
}
);
gsap.fromTo('.news .container', {
    //from
    opacity:0,
    x:400, 
},{
    //to
    opacity:1,
    x:0,
    duration:1.5,
    scrollTrigger:'.news'
}
);
gsap.fromTo('.contribution .container', {
    //from
    opacity:0,
    x:400, 
},{
    //to
    opacity:1.5,
    x:0,
    duration:1,
    scrollTrigger:'.contribution'
}
);