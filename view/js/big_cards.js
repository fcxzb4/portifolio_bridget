import {big_cards_bd} from "./../../model/big_cards_bd.js";

export function createBigCards (){
let cards = document.getElementById('cards')


   //create 4 cards


   for(let i = 0; i < big_cards_bd.length; i++ ){

     let div_card = document.createElement('div')
     div_card.className = 'card'

     let img_card = document.createElement('img')
     img_card.src = big_cards_bd[i].img

     let h1_card = document.createElement('h1')
     h1_card.textContent = big_cards_bd[i].formation

     let desc_card = document.createElement('h3')
     desc_card.textContent = big_cards_bd[i].subtext

     let btn_card_doc = document.createElement('button')
     btn_card_doc.className = 'button'

     let btn_card_link = document.createElement('button')
     btn_card_link.className = 'button'

     div_card.appendChild(img_card)
     div_card.appendChild(h1_card)
     div_card.appendChild(desc_card)
     div_card.appendChild(btn_card_doc)
     div_card.appendChild(btn_card_link)

     cards.appendChild(div_card)

   }

}
