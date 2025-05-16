import {big_cards_bd} from "./../../model/big_cards_bd.js";

export function createBigCards (){
let cards = document.getElementById('big_cards')


   //create 4 cards


   for(let i = 0; i < big_cards_bd.length; i++ ){

     let div_cards_2 = document.createElement('div')
     div_cards_2.className = 'every_cards'

     let img_card = document.createElement('img')
     img_card.src = big_cards_bd[i].img
     img_card.className = 'img_aleluia'

     let h1_card = document.createElement('h1')
     h1_card.textContent = big_cards_bd[i].formation
     h1_card.className = 'amen'

     let desc_card = document.createElement('h3')
     desc_card.textContent = big_cards_bd[i].subtext
     desc_card.className = 'gloria'
     
     let btn_card_doc = document.createElement('button')
     btn_card_doc.textContent = 'será'
     btn_card_doc.className = 'cards_button'

     btn_card_doc.addEventListener('click' ,()=> {big_cards_bd[i].button_doc()})

     let btn_card_link = document.createElement('button')
     btn_card_link.textContent = 'cacildes'
     btn_card_link.className = 'cards_link'

     btn_card_link.addEventListener('click' ,()=>{ big_cards_bd[i].button_link()});

     div_cards_2.appendChild(img_card)
     div_cards_2.appendChild(h1_card)
     div_cards_2.appendChild(desc_card)
     div_cards_2.appendChild(btn_card_doc)
     div_cards_2.appendChild(btn_card_link)

     cards.appendChild(div_cards_2)

   }

}
