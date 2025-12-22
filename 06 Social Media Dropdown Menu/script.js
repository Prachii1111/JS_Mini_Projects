// dropbtn

const arrowDown = document.querySelector(".fa-solid");
console.log(arrowDown);
const socialBtn = document.querySelector(".dropbtn");
console.log(socialBtn);
const menu = document.querySelector(".dropdown-content");
console.log(menu);

socialBtn.addEventListener('click', () => {
    
    menu.classList.toggle('show-content');
    arrowDown.classList.toggle('arrow-up');
});