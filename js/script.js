const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];

//scroll
window.addEventListener('scroll', toggleHeadle, false);

// trasicao header
function toggleHeadle() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        
        $logo.firstElementChild.setAttribute('src', 'imgs/logo.svg');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');

        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');

        $menu.firstElementChild.classList.remove('max-hamburger')
        $menu.firstElementChild.classList.add('min-hamburger');


    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        $header.classList.add('max-header');
        $header.classList.remove('min-header');
        
        $logo.firstElementChild.setAttribute('src','imgs/logo2.svg');
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');

        
        $navBar.classList.add('max-nav');
        $navBar.classList.remove('min-nav');

        $menu.firstElementChild.classList.add('max-hamburger')
        $menu.firstElementChild.classList.remove('min-hamburger');

    }
}

// configuracoes menu hamburger
$menu.addEventListener('click', toggleMenu, false);
var isOpen = false;
function toggleMenu() {
    if (!isOpen) {
        $navBar.classList.add('menu-opened');
        isOpen = true;
        $menu.firstElementChild.classList.add('close-btn')

    } else {
        $navBar.classList.remove('menu-opened');
        $menu.firstElementChild.classList.remove('close-btn')
        isOpen = false;
    }
}

$navBar.addEventListener('click', navClick, false);
function navClick(event) {
    if(event.target.tagName == 'A'){
        toggleMenu();
    }
}





