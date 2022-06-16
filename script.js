


const htmlClass = document.getElementById('root');

function hamburgerSlideOver(){
    const hamburgerMenu = document.getElementById('menu');
    if (hamburgerMenu.style.display === 'none'){
        hamburgerMenu.style.display = 'flex';
    } else {
        hamburgerMenu.style.display = 'none';
    }
}



function changeClass(change){
    
    if (change === beachloop){
        let change = 'beachloop';
        htmlClass.className = "beachloop";
        console.log('HTML Class Name was changed to ' + change);
    }
}