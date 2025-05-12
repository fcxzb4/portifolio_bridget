    export function createCards() {
    let cards_section = document.getElementById('cards')

    /*cria 12 cartaoes*/

    for (let i = 0; i < 12; i++) {

        let div_card = document.createElement('div')
        div_card.className = 'card'

        let i_card = document.createElement('i')
        i_card.className = 'fa-solid fa-thumbs-up'

        let tittle_card = document.createElement('h1')
        tittle_card.textContent = 'não creio'

        let subtext_card = document.createElement('h4')
        subtext_card.textContent = 'tá carrrrro nintendo'

        div_card.appendChild(i_card)
        div_card.appendChild(tittle_card)
        div_card.appendChild(subtext_card)

        cards_section.appendChild(div_card)
    
    }};


