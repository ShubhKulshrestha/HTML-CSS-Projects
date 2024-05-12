let ract = document.querySelector("#ractangle");
ract.addEventListener("mousemove",function(details){
   let ractloc = ract.getBoundingClientRect();
   let insideractval = details.clientX - ractloc.left;
   if (insideractval < ractloc.width/2){
    let redColor = gsap.utils.mapRange(0,ractloc.width/2,255,0,insideractval);
    gsap.to(ract ,{
      backgroundColor: `rgb(${redColor},0,0)`,
      ease : Power4,
    });
   }else{
      let blueColor = gsap.utils.mapRange(ractloc.width/2,ractloc.width,0,255,insideractval);
    gsap.to(ract ,{
      backgroundColor: `rgb(0,0,${blueColor})`,
      ease : Power4,
    });
    
   }
});
ract.addEventListener("mouseleave",function(){
   gsap.to(ract,{
      backgroundColor:"white"
   });
});

