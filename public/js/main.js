// Get buttons
const menu = document.querySelector("#open")
//Get Overlay
const overlay = document.querySelector("#overlay")
//Get Exit
const exit = document.querySelector("#exit")


let rule = CSSRulePlugin.getRule(".text-display span::after")


//Create GSAP timeline
const tl = gsap.timeline({defaults: {duration: 1, ease: Back.easeOut.config(2)}})
tl.paused(true)
tl.to("#overlay", {clipPath: 'circle(100%)'})
tl.to("#menu li", {opacity: 1, y: '-100px', stagger: 0.1}, "-=.6")






gsap.from('.text-display', { y: "50px"})
gsap.from('#social', {opacity: 0, delay: .5} )
gsap.to(rule, {cssRule: {scaleY: 0}, duration: .5})
gsap.from("#work", {scrollTrigger: "#work", y: "100px", opacity: 0, delay: .2})
gsap.from("#get-in-touch", {scrollTrigger: "#work", y: "100px", opacity: 0, delay: .2})
gsap.from("#entry", {scrollTrigger: { trigger: "#heading", start: "bottom bottom"},  y: "100px", opacity: 0, delay: .1, stagger: 1.2})
gsap.from("#what-I-do", {scrollTrigger: "#what-I-do",  y: "100px", opacity: 0, delay: .2 })



menu.addEventListener('click', () => {
   tl.play()
})

exit.addEventListener('click', () => {
   tl.reverse(.9)
})

overlay.addEventListener('click', () => {
    console.log("CLICKED CLOSE")
})