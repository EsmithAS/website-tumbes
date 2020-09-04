/* Menu */
const btnMenu = document.querySelector('#btnMenu');
const itemsMenu = document.querySelector('#itemsMenu');

btnMenu.addEventListener( 'click' , () =>{
    itemsMenu.classList.toggle('h-auto');
    btnMenu.classList.toggle('bg-blue-400');
})