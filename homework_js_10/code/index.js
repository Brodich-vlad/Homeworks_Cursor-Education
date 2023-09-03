import {
    myGetElement,
    getSrc
} from './my_functions.js';


// Функція управління нотами.
function showNote(e){
    const audio = myGetElement("#audioPlayer");
    const key = myGetElement(`.key[data-key=${e.code ? e.code: e}]`);

    if(key){
        key.classList.add('_show');
    }else return;
    
    if (!audio) return;

    audio.src = getSrc(`${e.code ? e.code: e}`);
    audio.currentTime = 0;
    audio.play();
    
    // Слухач події закінчення мелодії.
    audio.addEventListener('ended',()=>{
        key.classList.remove('_show');
    });
};

// Слухач події клавіатури.
window.addEventListener('keydown',showNote);

// Слухач події клік.
myGetElement('#decision')
    .addEventListener('click', (ev) => {
        if (ev.target.dataset.key) { showNote(ev.target.dataset.key) }
        return;
    });
