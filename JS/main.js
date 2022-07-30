const mainmenu = document.querySelector('.mainmenu');
const openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click', ()=> {
    mainmenu.classList.toggle('active')
});