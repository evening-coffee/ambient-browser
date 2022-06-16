


const htmlClass = document.getElementById('root');
const nowPlaying = document.getElementById('now-playing');
const nowPlayingSubheader = document.getElementById('now-playing-subheader');

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
        nowPlaying.innerHTML = "Now Listening To<br> Beachloop";
        nowPlayingSubheader.innerHTML = "To change the ambience, open the menu and choose a new scene.";
        console.log('HTML Class Name was changed to ' + change);
    }
}