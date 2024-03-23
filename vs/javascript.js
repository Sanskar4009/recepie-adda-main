
function cursorEffect()
{
    let page1=document.querySelector('#page1');
    let cursor=document.querySelector('#cursor');
    page1.addEventListener('mousemove',function(details)
    {
        // console.log(details);
        // cursor.style.top=`${details.y}px`;

        // cursor.style.left=`${details.x}px`;
        gsap.to(cursor,{
            x:details.x,
            y:details.y
        });
    });
    page1.addEventListener('mouseenter',function()
    {
        gsap.to(cursor,
        {
            scale:1,
            opacity:1
        })
    })
    page1.addEventListener('mouseleave',function()
    {
        gsap.to(cursor,
        {
            scale:0,
            opacity:0
        })
    })

}
cursorEffect();
// gsap.from('.hero',{
//     y:120,
//     duration:2
//     // scrollTrigger:{
//     //     trigger:'#hero',
//     //     scroller:'body',
//     //     start:'top 47%',
//     //     end:'top 46%',
//     //     markers:true,
//     //     scrub:2
//     // }
// });

var t1=gsap.timeline();
t1
    .from('#s1',{
        y:-80,
        duration:0.25,
        opacity:0,
        ease: "Power2.easeInOut",
        scale:0.2
    })
    .from('#s2',{
        y:-80,
        duration:0.25,
        opacity:0,
        ease: "Power2.easeInOut",
        scale:0.2
    })
    .from('#s3',{
        y:-80,
        duration:0.25,
        opacity:0,
        ease: "Power2.easeInOut",
        scale:0.2
    })
    .from('#s4',{
        y:-80,
        duration:0.25,
        opacity:0,
        ease: "Power2.easeInOut",
        scale:0.2
    })
    .from('#s5',{
        y:-80,
        duration:0.25,
        opacity:0,
        ease: "Power2.easeInOut",
        scale:0.2
    })
    .from('#s6',{
        y:-80,
        duration:0.25,
        opacity:0,
        ease: "Power2.easeInOut",
        scale:0.2
    })

gsap.from('#page1', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '#page1',
        start: 'top center', // when the top of the trigger hits the center of the viewport
        end: 'bottom center', // when the bottom of the trigger hits the center of the viewport
        toggleActions: 'restart none none reset' // onEnter, onLeave, onEnterBack, onLeaveBack
    }
});
// page 2
gsap.from('.elem .card', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.elem .card',
        start: 'top center', // when the top of the trigger hits the center of the viewport
        end: 'bottom center', // when the bottom of the trigger hits the center of the viewport
        toggleActions: 'restart none none reset' // onEnter, onLeave, onEnterBack, onLeaveBack
    }
});