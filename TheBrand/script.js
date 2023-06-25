const menuActive = document.querySelector('.menu');

const headerMenu = document.querySelector('.menu-button');

function toggleMenu(){
    menuActive.classList.toggle('hidden')
};

headerMenu.addEventListener('click', toggleMenu);