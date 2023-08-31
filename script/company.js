// 지도
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
center: new kakao.maps.LatLng(37.5602013,126.9829327), //지도의 중심좌표.
level: 3 //지도의 레벨(확대, 축소 정도)
};
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var markerPosition  = new kakao.maps.LatLng(37.5602013,126.9829327);
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// tab
const tab_title = document.querySelectorAll('.tab_title a')
const tab_section = document.querySelectorAll('.tab_container > section')
const title_active = document.querySelector('.tab_title a.active')
const section_active = document.querySelector('.tab_container section.active')
// 초기 숨기기
for(let i of tab_section){i.style.display = 'none'}
section_active.style.display = 'block'
// tab
tab_title.forEach(function(target, index){
    target.addEventListener('click', function(e){
        e.preventDefault();
        for(let i of tab_title){i.classList.remove('active')};
        target.classList.add('active');
        for(let i of tab_section){
            i.style.display = 'none'
            i.classList.remove('active')}
        tab_section[index].classList.add('active')
        tab_section[index].style.display = 'block'
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
