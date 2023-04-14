const cookiesFrame = document.getElementsByClassName('cookies')[0];
const cookiesAcceptButton = document.getElementsByClassName('cookies-button-yes')[0];
const cookiesDenyButton = document.getElementsByClassName('cookies-button-no')[0];

if (!localStorage.getItem('cookies')) {
    cookiesFrame.classList.add('active');
}

cookiesAcceptButton.addEventListener('click', () => {
    cookiesFrame.classList.remove('active');

    localStorage.setItem('cookies', 'true');
});

cookiesDenyButton.addEventListener('click', () => {
    cookiesFrame.classList.remove('active');

    localStorage.setItem('cookies', 'false');
});

if (localStorage.getItem('cookies') === True) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-KCFB4JK7CS');
    gtag('consent', 'default', {analytics_storage: "granted"});
}