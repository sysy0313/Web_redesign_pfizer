// research js
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
gsap.fromTo('.title h1', {
    //from
    opacity:0,
    y:50,
},{
    //to
    opacity:1,
    y:0,
    duration:1.5,
    scrollTrigger:'.title'
}
);
gsap.fromTo('.title p', {
    //from
    opacity:0,
    y:50,
},{
    //to
    opacity:1,
    y:0,
    duration:1.5,
    scrollTrigger:'.title'
}
);
gsap.fromTo('.container h1', {
    //from
    opacity:0,
    y:50,
},{
    //to
    opacity:1,
    y:0,
    duration:1.5,
    scrollTrigger:'.container'
}
);
gsap.fromTo('.con_box', {
    //from
    opacity:0,
},{
    //to
    opacity:1,
    duration:1.5,
    scrollTrigger:'.con_box'
}
);