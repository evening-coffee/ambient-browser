function hamburgerSlideOver(){
    const hamburgerMenu = document.getElementById('menu')
    if (hamburgerMenu.style.display === 'none'){
        hamburgerMenu.style.display = 'flex';
    } else {
        hamburgerMenu.style.display = 'none';
    }
}
