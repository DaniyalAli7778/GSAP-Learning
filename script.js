 let path =`M 10 80 Q 580 80 1200 80`;

 let finalPath=`M 10 80 Q 580 100 1200 80`;
 

 let String=document.querySelector('#string');
 
 String.addEventListener("mousemove",function(dets){
  path =`M 10 80 Q  ${dets.x} ${dets.y} 1200 80`

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


  gsap.to("#textAnimation1 h1",{
    transform:"translateX(-200%)",
    scrollTrigger:{
      trigger:"#textAnimation1 ",
      scroller:"body",
       start:"top 0%",
      end:"top -150%",
      scrub:2,
       pin:true,
       
    }

  })

  gsap.to("#textAnimation2 h1",{
    transform:"translateX(-200%)",
    scrollTrigger:{
      trigger:"#textAnimation2 ",
      scroller:"body",
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


   const menue =document.querySelector('nav i');
   menue.addEventListener('click',function(){
    const fulldiv= document.querySelector('.full');
fulldiv.style.display="inline-block";
var tl1 =gsap.timeline();

tl1.to(".full",{
 right:"0%",
duration:0.77,
 })


 gsap.from(".full h4",{
  x:150,
  duration:0.7,
  stagger:0.28,
  opacity:0,
 })
 gsap.from(".full i",{
  x:-10,
   opacity:0,
   duration:0.77,
   delay:0.28,
   stagger:1,
  })


   })



   const close =document.querySelector('.full i');
   close.addEventListener('click',function(){

   
    const fulldiv= document.querySelector('.full');
    fulldiv.style.display="none";

  

   })


