window.addEventListener("DOMContentLoaded", e => {
    function navbarMobile() {
        const nCollepsible = document.getElementById('mainNavbar');
        if (!nCollepsible) return;

        if(window.scrollY === 0) nCollepsible.classList.remove('navbar-mobile');
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