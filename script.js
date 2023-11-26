var tl =gsap.timeline({scrollTrigger:{
    trigger:".main",
    start:"50% 50%",
    end:"180% 50%",
    scrub:true,
    pin:true,
    // markers:true,
}})

tl.to(".img-div-top",{
    height: "70vh",
    width: "100%",
    left: "0%",
    top: "10%",
}, 'image')

tl.to("#scroll-img",{
    scale:1,
}, 'image')






var tl2 =gsap.timeline({scrollTrigger:{
    trigger:".top",
    start:"bottom 20%",
    end:"200% 35%",
    scrub:true,
    // pin:true,
    // markers:{
    //     startColor:"purple",
    //     endColor:"fuchsia",
    // }
}})


tl2.to(".top-para",{
    left:"-5%",
    opacity:0,
},'textmove')

tl2.to(".btm-para1",{
    left:"5%",
    opacity:0,
},'textmove')

tl2.to(".btm-para2",{
    left:"-10%",
    opacity:0,
},'textmove')

tl2.to("#scroll-img-2",{
    scale:".9",
    left:"-5%",
    // opacity:0,
},'textmove')

tl2.to(".end-div",{
    scale:"0.9",
    left:"5%",
    // opacity:0,
},'textmove')

tl2.to(".circle-div",{
    right:"-5%",
    marginRight:"5%",
    // opacity:0,
},'textmove')



var tl3 =gsap.timeline({scrollTrigger:{
    trigger:".top",
    start:"150% 20%",
    end:"250% 20%",
    scrub:true,
    // pin:true,
    // markers:{
    //     startColor:"black",
    //     endColor:"yellow",
    // }
}})


tl3.to(".image-item",{
    scale:".5",
    opacity:0,
},'textscale')