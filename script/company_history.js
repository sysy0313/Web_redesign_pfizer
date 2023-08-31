// company_history
// 제목 animation
const history = document.querySelector('#history')
const history_h1 = document.querySelector('#history > h1')
const history_title = document.querySelectorAll('#history .title')

window.addEventListener('scroll', function(){
    if(window.pageYOffset >= history.offsetTop-1000){
        history_h1.classList.add('title_move')
    }
})
// 각 내용
const period = document.querySelectorAll('.period');
period.forEach(function(target, index){
    window.addEventListener('scroll', function(){
        if(window.pageYOffset >= target.offsetTop-1000){
            target.classList.add('move')
        }else{
            target.classList.remove('move')
        }
    })
})