let menu =document.querySelector("#nav i")
let cross = document.querySelector("#full i")

let tl = gsap.timeline()
tl.to("#full",{
    right:0,
    duration:1,
    ease:"power3.out"
})
tl.from("#full h4",{
    x:150,
    duration:1,
    ease:"power3.out",
    stagger:0.3,
    opacity:0
})
tl.from("#full i",{
    opacity:0
})
tl.pause()

menu.addEventListener("click",function(){
tl.play()    
})
cross.addEventListener("click",function(){
    tl.reverse()
})