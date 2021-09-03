gsap.registerPlugin(ScrollTrigger);
gsap.to(".Mtxt",{
    duration:10,
    scrollTrigger: {
        trigger:".Mtxt",
        start:10,
        toggleClass:"slide-in-bottom",
    },
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".con1",{
    duration:10,
    scrollTrigger: {
        trigger:".con1",
        toggleClass:"slide-in-left",
    },
})

