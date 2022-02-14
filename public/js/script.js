window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const logo = document.getElementsByClassName('arrow')[0];

    if (scrollPos >= 100) logo.classList.add('arrow--scrolled');
    else logo.classList.remove('arrow--scrolled');
});

if ('netscape' in window && / rv:/.test(navigator.userAgent)) {
    const el = document.getElementById('icons');

    el.style.top = '-30px';
}
