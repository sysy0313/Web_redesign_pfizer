// company_map 
// 제목 animation
const map_section = document.querySelector('#map_section')
const map_title = document.querySelector('#map_section .title')
const map_contents = document.querySelector('#map_section .contents')
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= map_section.offsetTop-1000){
        map_title.classList.add('title_move')
        map_contents.classList.add('move')
    }
})