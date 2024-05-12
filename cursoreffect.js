window.addEventListener("mousemove", function(details){
    let ract = this.document.querySelector(".ract");
    let mouseval = gsap.utils.mapRange(0,window.innerWidth,100+ract.getBoundingClientRect().width/2,window.innerWidth-(100+ract.getBoundingClientRect().width/2),details.clientX)
gsap.to(".ract",{
    left:mouseval,
    ease:Power3,
});
});