// #value
/* gsap.fromTo('#value > .title', {
    //from
    opacity:0,
    y:120, 
},{
    //to
    opacity:1,
    y:0,
    duration:1,
    scrollTrigger:'#value'
}
);
gsap.fromTo('#value .box', {
    //from
    opacity:0,
    y:120, 
},{
    //to
    opacity:1,
    y:0,
    duration:2,
    scrollTrigger:'#value .box'
}
); */
// 제목 animation
const value = document.querySelector('#value')
const value_title = document.querySelector('#value .title')
const value_contents = document.querySelector('#value .contents')
// 제목
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= value.offsetTop-1000){
        value_title.classList.add('title_move')
    }
})
// 내용
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= value_contents.offsetTop-1000){
        value_contents.classList.add('move')
    }else{
        value_contents.classList.remove('move')
    }
})