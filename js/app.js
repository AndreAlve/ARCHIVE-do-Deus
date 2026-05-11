const glow = document.querySelector('.mouse-glow')

window.addEventListener('mousemove', (e) => {

    glow.style.left = e.clientX + 'px'
    glow.style.top = e.clientY + 'px'
})

const hero = document.querySelector('.hero')

window.addEventListener('mousemove', (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 40
    const y = (window.innerHeight / 2 - e.clientY) / 40

    hero.style.transform =
        `translate(${x}px, ${y}px)`
})

const cards = document.querySelectorAll('.status-card')

cards.forEach((card) => {

    card.addEventListener('mousemove', (e) => {

        card.style.setProperty('--x', `${x}px`)
        card.style.setProperty('--y', `${y}px`)

        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 12
        const rotateY = (centerX - x) / 12

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `
    })

    card.addEventListener('mouseleave', () => {

        card.style.transform = `
            rotateX(0)
            rotateY(0)
            translateY(0)
        `
    })
})

const cursor =
document.querySelector('.cursor')

const trail =
document.querySelector('.cursor-trail')

window.addEventListener('mousemove',(e)=>{

    const x = e.clientX
    const y = e.clientY

    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
})

let trailX = 0
let trailY = 0

window.addEventListener('mousemove',(e)=>{

    cursor.style.left =
    e.clientX + 'px'

    cursor.style.top =
    e.clientY + 'px'

    trailX = e.clientX
    trailY = e.clientY
})

function animarTrail(){

    const currentX =
    parseFloat(
        trail.style.left
    ) || 0

    const currentY =
    parseFloat(
        trail.style.top
    ) || 0

    const dx =
    trailX - currentX

    const dy =
    trailY - currentY

    trail.style.left =
    currentX + dx * .08 + 'px'

    trail.style.top =
    currentY + dy * .08 + 'px'

    requestAnimationFrame(
        animarTrail
    )
}

animarTrail()

const hoverItems =
document.querySelectorAll(
'a, button, .status-card'
)

hoverItems.forEach((item)=>{

    item.addEventListener('mouseenter',()=>{

        trail.style.width = '80px'
        trail.style.height = '80px'

        trail.style.border =
        '1px solid rgba(212,175,55,.6)'
    })

    item.addEventListener('mouseleave',()=>{

        trail.style.width = '40px'
        trail.style.height = '40px'

        trail.style.border =
        '1px solid rgba(212,175,55,.3)'
    })
})

const loader =
document.querySelector('.loader')

window.addEventListener('load',()=>{

    setTimeout(()=>{

        loader.style.opacity = '0'

        loader.style.visibility =
        'hidden'

    },3000)
})