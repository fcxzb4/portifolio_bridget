export function createHeader() {
    let header = document.getElementById('header');

    let logo_student = document.createElement('div');
    logo_student.id = "logo_student"
    logo_student.className = "space_justify"

    let btn_user = document.createElement('button');
    btn_user.id = "btn_user"
    btn_user.className = 'space_justify'

    let steezus = document.createElement('div');
    steezus.className = "steezus"

    let steezus_text = document.createElement('h1');
    steezus.id = 'steezus_text'
    steezus.textContent = "steezus"

    steezus.appendChild(steezus_text);
    logo_student.appendChild(btn_user)
    logo_student.appendChild(steezus)

    let btns_header = document.createElement('div');
    btns_header.id = "btns_header"
    btns_header.className = "space_justify"

    let btn_animated1 = document.createElement('div');
    btn_animated1.className = "btn_animated"

    let button1 = document.createElement('button')
    button1.name = "mario_box"
    button1.type = "button"
    
    button1.addEventListener('click',()=>
    window.location.href='./project.html' 
    )

    let span_1_1 = document.createElement('span')
    let span_1_2 = document.createElement('span')
    let span_1_3 = document.createElement('span')
    let span_1_4 = document.createElement('span')

    btn_animated1.appendChild(button1);
    btn_animated1.appendChild(span_1_1);
    btn_animated1.appendChild(span_1_2);
    btn_animated1.appendChild(span_1_3);
    btn_animated1.appendChild(span_1_4);


    let btn_animated2 = document.createElement('div');
    btn_animated2.className = "btn_animated"

    let button2 = document.createElement('button')
    button2.name = "mario_box"
    button2.type = "button"

    let span_2_1 = document.createElement('span')
    let span_2_2 = document.createElement('span')
    let span_2_3 = document.createElement('span')
    let span_2_4 = document.createElement('span')

    btn_animated2.appendChild(button2);
    btn_animated2.appendChild(span_2_1);
    btn_animated2.appendChild(span_2_2);
    btn_animated2.appendChild(span_2_3);
    btn_animated2.appendChild(span_2_4);

    let btn_animated3 = document.createElement('div');
    btn_animated3.className = "btn_animated"

    let button3 = document.createElement('button')
    button3.name = "mario_box"
    button3.type = "button"

    let span_3_1 = document.createElement('span')
    let span_3_2 = document.createElement('span')
    let span_3_3 = document.createElement('span')
    let span_3_4 = document.createElement('span')

    btn_animated3.appendChild(button3);
    btn_animated3.appendChild(span_3_1);
    btn_animated3.appendChild(span_3_2);
    btn_animated3.appendChild(span_3_3);
    btn_animated3.appendChild(span_3_4);


    btns_header.appendChild(btn_animated1)
    btns_header.appendChild(btn_animated2)
    btns_header.appendChild(btn_animated3)

    header.appendChild(logo_student)
    header.appendChild(btns_header)
};