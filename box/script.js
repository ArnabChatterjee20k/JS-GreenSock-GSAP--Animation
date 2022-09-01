let boxes = Array.from(document.querySelectorAll(".box"))
let colors = ["red","blue","green","brown","cyan"]
boxes.map((box)=>{
    box.style.backgroundColor=colors[Math.floor(Math.random()*5)]
})


gsap.from(".box",{
    opacity:0,
    scale:0.5,
    stagger:0.2,
    delay:0.5,
    ease:"elastic",
    duration:2,
    force3D:true
    }
)

boxes.map(box=>{
    box.onclick=()=>{
        gsap.to(".box",{
            y:500,
            stagger:0.3,
            opacity:0,
            ease:"back.in",
            scale:0,
            duration:2
        })
    }
})
