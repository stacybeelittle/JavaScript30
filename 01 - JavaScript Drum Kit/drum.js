
function sounds(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0; /*rewinds to the start*/
    audio.play();
    key.classList.toggle('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', sounds);

//const keyClick = document.getElementsByClassName('key');

//keyClick.onclick = function(){
    //keyClick.classList.toggle('playing');
    
//}