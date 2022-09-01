const btn = document.querySelector("#btn")
// gsap.to(".box",{x:500,fill:'blue'})
// gsap.from(".box",{x:1000,fill:"blue"})
// btn.onclick =()=> gsap.fromTo(".box",{x:0,fill:'blue'},{x:500,fill:"green"})

let prop = {y : 0};
function animate(){
    gsap.to(".box",{ 
        backgroundColor:"blue",
        rotation: "+=360", 
        x: prop.y<150?"+=100":"-=100", 
        yPercent: prop.y<150&&prop.y>=0?"+=50":"-=50" , 
        duration:2 ,
        // repeat:2,
        yoyo:true,
        ease:"elastic",
        onUpdate:()=>prop.y<150&&prop.y>=0?prop.y+=50:prop.y-=50
    })
}

btn.onclick =()=> animate()