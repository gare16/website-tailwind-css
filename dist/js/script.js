// Scrolling NavBar
    window.onscroll = function() {
        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;

        if (window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed');
        }else{
            header.classList.remove('navbar-fixed');
        }
    };

// hamburger
const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('#nav-menu')
    hamburger = addEventListener('click', function() {
        hamburger.classList.toggle('hamburger-active');
        navBar.classList.toggle('hidden')
    });