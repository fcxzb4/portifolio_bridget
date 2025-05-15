import { cards_bd } from "../../model/cards_bd.js"

export function createCards() {
    let cards_section = document.getElementById('cards')

    /*cria 12 cartaoes*/

    for (let i = 0; i < cards_bd.length; i++) {

        let div_card = document.createElement('div')
        div_card.className = 'card'

        let i_card = document.createElement('i')
        i_card.className = cards_bd[i].i;

        let tittle_card = document.createElement('h1')
        tittle_card.textContent = cards_bd[i].name;

        let subtext_card = document.createElement('h4')
        subtext_card.textContent = cards_bd[i].language;

        div_card.appendChild(i_card)
        div_card.appendChild(tittle_card)
        div_card.appendChild(subtext_card)

        cards_section.appendChild(div_card)

    }
};


