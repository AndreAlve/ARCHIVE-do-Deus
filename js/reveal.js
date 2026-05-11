const reveals =
document.querySelectorAll('.reveal')

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target
            .classList
            .add('active')
        }
    })

},{
    threshold:.2
})

reveals.forEach((reveal)=>{

    observer.observe(reveal)
})

