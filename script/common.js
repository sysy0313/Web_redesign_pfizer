// header 스크롤
window.addEventListener('scroll',function(){
    if(window.pageYOffset == 0){
        header.style.background = 'none'
        sub_bg.style.background = 'rgba(255,255,255,0.7)'
        search_open.style.background = 'rgba(255,255,255,0.7)'
    }else{
        header.style.background = '#fff'
        sub_bg.style.background = "#fff"
        search_open.style.background = '#fff'
    }
})


const header = document.querySelector('header')
const sub_bg = document.querySelector('.sub_bg')
const gnb_sub = document.querySelectorAll('#gnb .sub')
const gnb_li = document.querySelectorAll('#gnb > li > a')
const nav = document.querySelector('nav')
// 모바일메뉴
const m_nav_open = document.querySelector('.m_nav_open')
const m_nav_btn = document.querySelector('.m_nav_btn')
const m_nav_li = document.querySelectorAll('#m_gnb > li ')
const m_nav_sub = document.querySelectorAll('.m_nav_open .sub')
//검색
const header_search = document.querySelector('.header_search')
const search_open = document.querySelector('.search_open')

/* for(let i of gnb_li){i.addEventListener('mouseover', function(){
    sub_bg.classList.add('open')
    for(let i of gnb_sub){i.classList.add('open')}
    header.classList.add('sub')
})} */


nav.addEventListener('mouseover', function(){
    sub_bg.classList.add('open')
    for(let i of gnb_sub){i.classList.add('open')}
    header.classList.add('sub')
})
sub_bg.addEventListener('mouseout', function(){
    sub_bg.classList.remove('open')
    for(let i of gnb_sub){i.classList.remove('open')}
    header.classList.remove('sub')
})

// m_nav open
m_nav_btn.addEventListener('click',function(e){
    e.preventDefault();
    search_open.classList.remove('open')
    m_nav_open.classList.toggle('open')
    header.classList.toggle('open')
    sub_bg.classList.toggle('hide')
    for(let i of gnb_sub){i.classList.toggle('hide')}
})
// m_nav sub
m_nav_li.forEach(function(target, index){
    target.addEventListener('click', function(e){
        e.preventDefault();
        for(let i of m_nav_sub){i.classList.remove('open')}
        target.lastElementChild.classList.toggle('open')
    })
})
// search_open
header_search.addEventListener('click',function(e){
    e.preventDefault();
    m_nav_open.classList.remove('open')
    search_open.classList.toggle('open')
    sub_bg.classList.toggle('hide')
    for(let i of gnb_sub){i.classList.toggle('hide')}
    header.classList.toggle('sub')
})
