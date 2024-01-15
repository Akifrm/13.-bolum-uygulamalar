window.addEventListener("DOMContentLoaded", e => {
    function navbarMobile() {
        const nCollepsible = document.getElementById('mainNavbar');
        if (!nCollepsible) return;

        if (window.scrollY === 0) nCollepsible.classList.remove('navbar-mobile');
        else nCollepsible.classList.add('navbar-mobile');
    }
    navbarMobile();
    document.addEventListener('scroll', navbarMobile);

    const myNavbar = document.getElementById('mainNavbar');
    if (myNavbar) new bootstrap.ScrollSpy(document.body, {
        target: '#mainNavbar',
        offset: 74
    })
});

const btns = document.getElementsByClassName('btn-close-canvas');

for (const btn of btns) {
    btn.addEventListener('click', () => {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click()
    })
}

const myName = document.getElementById('name');
const myEmail = document.getElementById('email');
const myPhone = document.getElementById('phone');
const myMessage = document.getElementById('message');
const myBtn = document.getElementById('btnContact');

if (myMessage.value.length == 0) {
    myBtn.disabled = true;
}

const spacePattern = /^\S*$/;
const numericPattern = /^([^0-9]*)$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const onlyNumberPattern = /^[0-9]*$/;

myName.addEventListener('blur', myNamefunc);
myEmail.addEventListener('blur', myEmailfunc);
myPhone.addEventListener('blur', myPhonefunc);
myMessage.addEventListener('blur', myMessagefunc);

function myNamefunc() {
    const myerr = document.getElementById('ErrName');
    if (myName.value.length == 0) {
        myName.classList.remove('is-valid');
        myName.classList.add('is-invalid');
        myerr.innerHTML = 'İsim alanı boş bırakılmaz';
        return false;
    } else if (myName.value.length < 3) {
        myName.classList.remove('is-valid');
        myName.classList.add('is-invalid');
        myerr.innerHTML = 'İsiminiz 3 karakterden az olamaz';
        return false;
    } else if (myName.value.length > 30) {
        myName.classList.remove('is-valid');
        myName.classList.add('is-invalid');
        myerr.innerHTML = 'İsiminiz 30 karakterden fazla olamaz';
        return false;
    } else if (!numericPattern.test(myName.value)) {
        myName.classList.remove('is-valid');
        myName.classList.add('is-invalid');
        myerr.innerHTML = 'İsiminizde rakam olamaz';
        return false;
    } else {
        myName.classList.add('is-valid');
        myName.classList.remove('is-invalid');
        return true;
    }
}

function myEmailfunc() {
    const myerr = document.getElementById('ErrEmail');
    if (myEmail.value.length == 0) {
        myEmail.classList.remove('is-valid');
        myEmail.classList.add('is-invalid');
        myerr.innerHTML = 'Mail alanı boş bırakılmaz';
        return false;
    } else if (myEmail.value.length < 5) {
        myEmail.classList.remove('is-valid');
        myEmail.classList.add('is-invalid');
        myerr.innerHTML = 'Mailiniz 5 karakterden az olamaz';
        return false;
    } else if (!spacePattern.test(myEmail.value)) {
        myName.classList.remove('is-valid');
        myName.classList.add('is-invalid');
        myerr.innerHTML = 'Eposta adresinizde boşluk bıraktınız';
        return false;
    } else if (!emailPattern.test(myEmail.value)) {
        myName.classList.remove('is-valid');
        myName.classList.add('is-invalid');
        myerr.innerHTML = 'Eposta formatınız yanlış. Tekrar kontrol ediniz';
        return false;
    } else {
        myEmail.classList.add('is-valid');
        myEmail.classList.remove('is-invalid');
        return true;
    }
}

function myPhonefunc() {
    const myerr = document.getElementById('ErrPhone');
    if (myPhone.value.length == 0) {
        myPhone.classList.remove('is-valid');
        myPhone.classList.add('is-invalid');
        myerr.innerHTML = 'Telefon alanı boş bırakılmaz';
        return false;
    } else if (!onlyNumberPattern.test(myPhone.value)) {
        myName.classList.remove('is-valid');
        myName.classList.add('is-invalid');
        myerr.innerHTML = 'Telefon numaranız sadece rakamlardan oluşmalıdır';
        return false;
    } else if (myPhone.value.length < 9) {
        myPhone.classList.remove('is-valid');
        myPhone.classList.add('is-invalid');
        myerr.innerHTML = 'Telefonunuz 9 karakterden az olamaz';
        return false;
    } else if (!spacePattern.test(myPhone.value)) {
        myName.classList.remove('is-valid');
        myName.classList.add('is-invalid');
        myerr.innerHTML = 'Telefon numaranızda boşluk bıraktınız';
        return false;
    } else {
        myPhone.classList.add('is-valid');
        myPhone.classList.remove('is-invalid');
        return true;
    }
}

function myMessagefunc() {
    const myerr = document.getElementById('ErrMessage');
    if (myMessage.value.length == 0) {
        myMessage.classList.remove('is-valid');
        myMessage.classList.add('is-invalid');
        myerr.innerHTML = 'Mesaj alanı boş bırakılmaz';
        return false;
    } else if (myMessage.value.length < 10) {
        myMessage.classList.remove('is-valid');
        myMessage.classList.add('is-invalid');
        myerr.innerHTML = 'Mesajınız 10 karakterden az olamaz';
        return false;
    } else {
        myMessage.classList.add('is-valid');
        myMessage.classList.remove('is-invalid');
        return true;
    }
}

myMessage.addEventListener('keyup', () => {
    document.getElementById('current-character').textContent = myMessage.value.length;

    if (myMessage.value.length >= 10) myBtn.disabled = false;
    else myBtn.disabled = true;
});

const myForms = document.querySelector('.needs-validation');
myForms.addEventListener('submit', e => {
    console.log(!myForms.checkValidity(), !myNamefunc(), !myEmailfunc(), !myPhonefunc(), !myMessagefunc())
    if (!myForms.checkValidity() || !myNamefunc() || !myEmailfunc() || !myPhonefunc() || !myMessagefunc()) {
        e.preventDefault();
        e.stopPropagation();
    } else {
        myName.value = "";
        myEmail.value = "";
        myPhone.value = "";
        myMessage.value = "";
    }
});