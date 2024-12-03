 let path =`M 10 80 Q 580 80 1160 80`;

 let finalPath=`M 10 80 Q 580 100 1160 80`;
 

 let String=document.querySelector('#string');


 String.addEventListener("mousemove",function(dets){
  path =`M 10 80 Q  ${dets.x} ${dets.y} 1160 80`

  gsap.to("svg path",{
    attr:{d:path},
        duration:0.2,
    ease:"power3.out"
  })
        console.log(path);
 }  )


 String.addEventListener("mouseleave",function(dets){
  path =finalPath;

  gsap.to("svg path",{
    attr:{d:finalPath},
duration:1.5,
ease:"elastic.out(1.2,0.2)"
  })
        console.log(path);
 }  )
 
 // SVG animation end

 // CURSOUR animation starts heres

 const main2 =document.querySelector("#main2");

 const cursour =document.querySelector(".cursour");
const imagediv= document.querySelector('#image');
 main2.addEventListener("mousemove",function(e){
     gsap.to(cursour,{
      x:e.x,
      y:e.y,
      ease:"back.out"
     })
  
 })
  gsap.to("#textAnimation h1",{
    transform:"translateX(-200%)",
    scrollTrigger:{
      trigger:"#textAnimation ",
      scroller:"body",
      markers:true,
      start:"top 0%",
      end:"top -150%",
      scrub:2,
       pin:true,
       
    }

  })


  image.addEventListener("mouseenter",function(){
    cursour.innerHTML="View More"
    gsap.to(cursour,{
      scale:2,
    })
   })


   image.addEventListener("mouseleave",function(){
    cursour.innerHTML="",
    gsap.to(cursour,{
      scale:1,
    })
   })