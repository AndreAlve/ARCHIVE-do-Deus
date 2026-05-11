const tabButtons =
document.querySelectorAll('.tab-button')

const tabPanels =
document.querySelectorAll('.tab-panel')

tabButtons.forEach((button)=>{

    button.addEventListener('click',()=>{

        // remove active dos botões
        tabButtons.forEach((btn)=>{
            btn.classList.remove('active')
        })

        // ativa botão clicado
        button.classList.add('active')

        // pega id
        const tab =
        button.dataset.tab

        // remove active dos panels
        tabPanels.forEach((panel)=>{
            panel.classList.remove('active')
        })

        // ativa panel correto
        document
        .getElementById(tab)
        .classList.add('active')
    })
})