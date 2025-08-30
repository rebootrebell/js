// console.log("hello")
// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     borderRadius:"50%",
//     scale:2
// })

// gsap.from("#box-2",{
//     x:1000,
//     duration:2,
//     delay:1,
//     // scale:/2
// })
// gsap.from("h1",{
//     // color:"red",
//     duration:2,
//     delay:2,
//     y:30,
//     stagger:1,//we can also give -ve values so that it start from last element
//     // opacity:0
// })
// gsap.to("#box",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     scale:1,
//     repeat:-1, //-1 for infinite repeat
//     yoyo:true
// })


//timeline
// gsap.to("#box1", {
//     x: 1400,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360
// });

// gsap.to("#box2", {
//     x: 1400,
//     duration: 1.5,
//     delay: 2.5,
//     backgroundColor: "green" 
// });
// gsap.to("#box3", {
//     x:1400,
//     duration:1.5,
//     delay:4,
//     borderRadius:"50%"
// })

//we can use another good method to implement timeline
let tl= gsap.timeline();
tl.to("#box1", {
    x: 1400,
    duration: 1.5,
    delay: 1,
    rotate: 360
});
tl.to("#box2", {
    x: 1400,
    duration: 1.5,
    delay: 1,
    backgroundColor: "green" 
});
tl.to("#box3", {
    x:1400,
    duration:1.5,
    delay:1,
    borderRadius:"50%"
})