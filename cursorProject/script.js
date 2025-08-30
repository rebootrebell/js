let main = document.querySelector("#main");
let cursor = document.getElementById("cursor");
let image=document.getElementById("image")
main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration:1,
    ease:"back.out"
  });
});

image.addEventListener("mouseenter",function(){
    cursor.innerHTML="View"
gsap.to(cursor, {

    scale:4
})    
})
image.addEventListener("mouseleave",function(){
    gsap.to(cursor, {
        scale:1
    })    
    })