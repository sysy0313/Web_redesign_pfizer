const sub_bg = document.querySelector('.sub_bg')
const gnb_sub = document.querySelectorAll('#gnb .sub')
const gnb_li = document.querySelectorAll('#gnb > li')
// 모바일메뉴
const m_nav_open = document.querySelector('.m_nav_open')
const m_nav_btn = document.querySelector('.m_nav_btn')
const m_nav_li = document.querySelectorAll('#m_gnb > li ')
const m_nav_sub = document.querySelectorAll('.m_nav_open .sub')
//검색
const header_search = document.querySelector('.header_search')
const search_open = document.querySelector('.search_open')
// search_open.style.display = 'none'

console.log(gnb_li)

// sub
$('#gnb .sub').hide();
$('.sub_bg').hide();
$('nav').mouseover(function(){
    $('#gnb .sub').stop().slideDown(500)
    $('.sub_bg').stop().slideDown(500)
}).mouseout(function(){
    $('#gnb .sub').stop().slideUp(500)
    $('.sub_bg').stop().slideUp(500)
})

// m_nav open
m_nav_btn.addEventListener('click',function(e){
    e.preventDefault();
    search_open.classList.remove('open')
    m_nav_open.classList.toggle('open')
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
})
