const form = document.getElementById('form');
const password = document.getElementById('password');
const eR = document.getElementById('pasEr');
const email = document.getElementById('mail').value;
const checkboxP = document.getElementById('checkP');
const usrP = document.getElementById('adP');
const mailP = document.getElementById('mailP');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //Password 
    if (password.value.length <= 0) {
        eR.innerText = 'Lütfen Bu Alanı doldurun';
    }
    else if (password.value.length <= 8) {
        eR.innerText = 'Şifre 8 karakter den fazla olmalı';
    }
    else if (password.value.length >= 8) {
        eR.innerText = '';
    }

    //Mail
    if (document.querySelector('#mail').value.length <= 0) {
        mailP.innerText = 'Lütfen Bu Alanı doldurun';
    }
    else if (email.indexOf("@") == -1) {

        mailP.innerText = 'Lütfen @ Kullanın';

    }
    else if (email.value.length >= '0') {
        mailP = 'text'
    }
    else {
        mailP.innerText = '';
    }
    //CheckBox
    if (document.querySelector('#cheI:checked') === null) {
        checkboxP.innerText = 'Lütfen Bu Alanı doldurun';
    }
    else {
        checkboxP.innerText = '';
    }
    //User name
    if (document.querySelector('#ad').value.length <= 0) {
        usrP.innerText = 'Lütfen Bu Alanı doldurun';
    }
    else {
        usrP.innerText = '';
    }




})


