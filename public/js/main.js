// Get buttons
const menu = document.querySelector("#open")
//Get Overlay
const overlay = document.querySelector("#overlay")
//Get Exit
const exit = document.querySelector("#exit")

//Create GSAP timeline
const tl = gsap.timeline({defaults: {duration: 1, ease: Back.easeOut.config(2)}})
tl.paused(true)
tl.to("#overlay", {clipPath: 'circle(100%)'})
tl.to("#menu li", {opacity: 1, y: '-100px', stagger: 0.1}, "-=.6")


menu.addEventListener('click', () => {
   tl.play()
})

exit.addEventListener('click', () => {
   tl.reverse(.9)
})

overlay.addEventListener('click', () => {
    console.log("CLICKED CLOSE")
})