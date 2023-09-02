import { 
    getElement,
} from './my_functions.js';


// Функція управління нотами.
function showNote(e){
    const audio = getElement(`audio[data-key=${e.code ? e.code: e}]`);
    const key = getElement(`.key[data-key=${e.code ? e.code: e}]`);
    if(key){
        key.classList.add('_show')
    }
   if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    audio.addEventListener('ended',()=>{
        key.classList.remove('_show')
    })
}

// Подія клавіатури.
window.addEventListener('keydown',showNote);

// Подія клік.
getElement('#decision')
    .addEventListener('click',(ev)=>{
        if(ev.target.dataset.key){showNote(ev.target.dataset.key)}
        return
    });
