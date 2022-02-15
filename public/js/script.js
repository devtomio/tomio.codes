window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const logo = document.getElementsByClassName('arrow')[0];

    if (scrollPos >= 100) logo.classList.add('arrow--scrolled');
    else logo.classList.remove('arrow--scrolled');
});

window.addEventListener('load', () => {
    const loader = document.getElementsByClassName('loading')[0];
    const main = document.getElementsByClassName('mainpage')[0];

    setTimeout(() => {
        loader.classList.add('fade-out');

        setTimeout(() => {
            main.style.display = 'block';
        }, 500);
    }, 1500);
});

if ('netscape' in window && / rv:/.test(navigator.userAgent)) {
    const el = document.getElementById('icons');

    el.style.top = '-30px';
}
