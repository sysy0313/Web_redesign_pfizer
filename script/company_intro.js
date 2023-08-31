// 제목 animation
const intro = document.querySelector('#intro')
const intro_title = document.querySelector('#intro .title')
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= intro.offsetTop-1000){
        intro_title.classList.add('title_move')
    }
})
// 각 contents animation
const intro_con_odd = document.querySelectorAll('#intro .con1, #intro .con3')
const intro_con_even = document.querySelectorAll('#intro .con2, #intro .con4')
const intro_photo_odd = document.querySelectorAll('#intro .con1 .photo, #intro .con3 .photo')
const intro_photo_even = document.querySelectorAll('#intro .con2 .photo, #intro .con4 .photo')
const intro_txt_odd = document.querySelectorAll('#intro .con1 .txt, #intro .con3 .txt')
const intro_txt_even = document.querySelectorAll('#intro .con2 .txt, #intro .con4 .txt')

intro_con_odd.forEach(function(target, index){
    window.addEventListener('scroll', function(){
        if(window.pageYOffset >= target.offsetTop-1000){
            intro_photo_odd[index].classList.add('move')
            intro_txt_odd[index].classList.add('move')
        }else{
            intro_photo_odd[index].classList.remove('move')
            intro_txt_odd[index].classList.remove('move')
        }
    })
})
intro_con_even.forEach(function(target, index){
    window.addEventListener('scroll', function(){
        if(window.pageYOffset >= target.offsetTop-1000){
            intro_photo_even[index].classList.add('move')
            intro_txt_even[index].classList.add('move')
        }else{
            intro_photo_even[index].classList.remove('move')
            intro_txt_even[index].classList.remove('move')
        }
    })
})