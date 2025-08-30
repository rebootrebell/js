let initialPath=`M 10 100 Q 250 100 990 100`

let finalPath  =`M 10 100 Q 250 100 990 100`

let string = document.querySelector("#string")
string.addEventListener("mouseenter",function(dets){
   path=`M 10 100 Q 250 ${dets.y} 990 100`
   gsap.to("svg path",{
    attr:{d:path},
    duration:0.36,
    ease:"power3.out"
   })
    
})
string.addEventListener("mouseleave",function(){
    console.log("mouse left");
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.36,
        ease:"bounce.out"
    })
})
