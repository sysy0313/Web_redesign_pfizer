// drug js
const icon_hover = document.querySelectorAll('.hover')
const icon_show = document.querySelectorAll('.show')
const cat = document.querySelectorAll('.cat a')
const active =document.querySelector('.active')
for(let i of icon_hover){i.style.display = 'none'}
icon_hover[0].style.display = 'block'
icon_show[0].style.display = 'none'
cat.forEach(function(target, index){
    target.addEventListener('mouseover',function(){
        icon_show[index].style.display = 'none';
        icon_hover[index].style.display = 'block';
        icon_hover[0].style.display = 'block'
        icon_show[0].style.display = 'none'
    })
    target.addEventListener('mouseout',function(){
        icon_hover[index].style.display = 'none';
        icon_show[index].style.display = 'block';
        icon_hover[0].style.display = 'block'
        icon_show[0].style.display = 'none'
    })
})
// 스크롤트리거
gsap.fromTo('.bnr h1', {
    //from
    opacity:0,
},{
    //to
    opacity:1,
    duration:2,
    scrollTrigger:'.bnr'
}
);
gsap.fromTo('#wrap', {
    //from
    opacity:0,
    x:100,
},{
    //to
    opacity:1,
    x:0,
    duration:1.5,
    scrollTrigger:'#wrap'
}
);

