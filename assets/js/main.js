//seletores
let img = document.querySelector('img');
let section = document.querySelector('section');
let p = document.querySelector('p');

let horaAtual = 22;

if(horaAtual >= 6 && horaAtual < 12){
    //manha
    p.textContent = 'São '  + horaAtual + ' horas da manha';
    img.setAttribute('src', './assets/img/manhaiconi.jpg');
    section.style.backgroundImage = "url('./assets/img/manha.jpg')";
}

if(horaAtual >= 12 && horaAtual <= 18){
    //tarde
    p.textContent = 'São '  + horaAtual + ' horas da tarde';
    img.setAttribute('src', './assets/img/tardeiconi.jpg');
    section.style.backgroundImage = "url('./assets/img/tarde.jpg')";
}

else{
    //noite
    p.textContent = 'São '  + horaAtual + ' horas da noite';
    img.setAttribute('src', './assets/img/noiteiconi.jpg');
    section.style.backgroundImage = "url('./assets/img/noite.jpg')";
}