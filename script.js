let path = `M 10 80 Q 580 80 1280 80`;

let finalPath = `M 10 80 Q 580 100 1280 80`;


let String = document.querySelector('#string');

String.addEventListener("mousemove", function (dets) {
  path = `M 10 80 Q  ${dets.x} ${dets.y} 1280 80`

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out"
  })
 
})


String.addEventListener("mouseleave", function (dets) {
  path = finalPath;

  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1.2,0.1)"
  })
 
})



// SVG animation end

// CURSOUR animation starts heres

const main2 = document.querySelector("#main2");

const cursour = document.querySelector(".cursour");
const imagediv = document.querySelector('#image');
main2.addEventListener("mousemove", function (e) {
  gsap.to(cursour, {
    x: e.x,
    y: e.y,
    ease: "back.out"
  })

})


gsap.to("#textAnimation1 h1", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: "#textAnimation1 ",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,

  }

})

gsap.to("#textAnimation2 h1", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: "#textAnimation2 ",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,

  }

})
image.addEventListener("mouseenter", function () {
  cursour.innerHTML = "View More"
  gsap.to(cursour, {
    scale: 2,
  })
})


image.addEventListener("mouseleave", function () {
  cursour.innerHTML = "",
    gsap.to(cursour, {
      scale: 1,
    })
})


const menue = document.querySelector('nav i');
menue.addEventListener('click', function () {
  const fulldiv = document.querySelector('.full');
  fulldiv.style.display = "inline-block";
  var tl1 = gsap.timeline();

  tl1.to(".full", {
    right: "0%",
    duration: 0.77,
  })


  gsap.from(".full h4", {
    x: 150,
    duration: 0.7,
    stagger: 0.28,
    opacity: 0,
  })
  gsap.from(".full i", {
    x: -10,
    opacity: 0,
    duration: 0.77,
    delay: 0.28,
    stagger: 1,
  })


})



const close = document.querySelector('.full i');
close.addEventListener('click', function () {


  const fulldiv = document.querySelector('.full');
  fulldiv.style.display = "none";



})




function breakTheText() {
  const h1 = document.querySelector("#page4 h1")
  let h1Text = h1.textContent;

  let splittedText = h1Text.split("");

  let halfValue= h1Text.length/2;
   
  var cullter = "";
  splittedText.forEach(function (elem,idx) {

    if(idx<halfValue){
    cullter += `<span class="a">${elem}</span>`;
    }else{
      cullter += `<span class="b">${elem}</span>`;

    }

  })




  h1.innerHTML = cullter;
 

}

breakTheText();


gsap.from("h1 .a",{
  y:50,
  duration:1,
stagger:0.3,
delay:0.5,
  opacity:0,
scrollTrigger:{
  trigger:"h1 .a",
  scroller:"body",
  }

})

gsap.from("h1 .b",{
  y:50,
  duration:1,
stagger:-0.3,
delay:0.5,
  opacity:0,
  scrollTrigger:{
    trigger:"h1 .a",
    scroller:"body",
    }

})




function whellAnimation(){

const move= document.querySelector(".page5")
  move.addEventListener("wheel",function(event){
    console.log(event.deltaY);
    if(event.deltaY>0){
  const marquee =document.querySelector(".move .marquee");
  gsap.to(".marquee",{
    transform:"translateX(100%)",
    duration:2,
    repeat:-1,
  ease:"none",
  scrollTrigger:{
    trigger:"marquee",
    scroller:"body",
  
  }
   })
  
   gsap.to(".marquee img",{
    rotate:180,
    duration:1,
   })
    }else{
      gsap.to(".marquee",{
        transform:"translateX(-100%)",
        duration:2,
        repeat:-1,
      ease:"none",    
      scrollTrigger:{
        trigger:"marquee",
        scroller:"body",
      
      }
    });
    gsap.to(".marquee img",{
      rotate:0,
      duration:1,
     })
  }})
  

}
whellAnimation();