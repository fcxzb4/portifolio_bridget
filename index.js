document.addEventListener('DOMContentLoaded', () => {
    let header = document.getElementById('header');

    let logo_student = document.createElement('div');
    logo_student.id = "logo_student"
    logo_student.className = "space_justify"

    let btn_user = document.createElement('button');
    btn_user.id = "btn_user"

    let steezus = document.createElement('div');
    steezus.className = "steezus"

    let steezus_text = document.createElement('h1');
    steezus.textContent = "steezus"

    steezus.appendChild(steezus_text);
    logo_student.appendChild(btn_user)
    logo_student.appendChild(steezus)

    let btns_header = document.createElement('div');
    btns_header.id = "btns_header"
    btns_header.className = "space_justify"

    let span = document.createElement('span');
    let button = document.createElement('button')
    button.name = "mario_box"
    button.type = "button"

    let btn_animated = document.createElement('div');
    btn_animated.className = "btn_animated"

    btn_animated.appendChild(button);
    btn_animated.appendChild(span);
    btn_animated.appendChild(span);
    btn_animated.appendChild(span);
    btn_animated.appendChild(span);


    let btn_animated2 = document.createElement('div');
    btn_animated2.className = "btn_animated"

    btn_animated.appendChild(button);
    btn_animated.appendChild(span);
    btn_animated.appendChild(span);
    btn_animated.appendChild(span);
    btn_animated.appendChild(span);

    let btn_animated3 = document.createElement('div');
    btn_animated3.className = "btn_animated"

    btn_animated.appendChild(button);
    btn_animated.appendChild(span);
    btn_animated.appendChild(span);
    btn_animated.appendChild(span);
    btn_animated.appendChild(span);


    btns_header.appendChild(btn_animated)
    btns_header.appendChild(btn_animated2)
    btns_header.appendChild(btn_animated3)

    header.appendChild(logo_student)
    header.appendChild(btns_header)
});