function breakTheText(){
    let h1= document.querySelector("h1")
let h1Text=h1.textContent
let splittedText=h1Text.split("")
clutter=""
splittedText.forEach(function(e){
clutter+=`<span>${e}</span>`  
})
h1.innerHTML=clutter
}
breakTheText()

gsap.from("h1 span",{
    y:50,
    duration:0.8,
    delay:0.5,
    stagger:-0.14,
    opacity:0
}   )