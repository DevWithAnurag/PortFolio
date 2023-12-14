var TimeLine1 = gsap.timeline({scrollTrigger:{
    trigger: ".page1",
    start: "60% 10%",
    end: "100% 100%",
    scrub: true,
}})


TimeLine1.to(".line",{
    height:"0px",
},'animation')



TimeLine1.to(".page2Box",{
    opacity:"1",
    scale:"1"
},'animation')

