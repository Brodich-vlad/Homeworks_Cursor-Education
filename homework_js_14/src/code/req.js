import starships from '../image/alt-starships.png';
import planets from '../image/alt-planets.png';
import characters from '../image/alt-characters.png';

const loader = document.querySelector('.wrapper_loader');

// Функція робить запит на сервер для отримання інфо.
export async function req (url, callbeck=()=>{}){

    loader.classList.remove('_hiden');

    const result = await fetch(url);

    if(result.ok){
        result.json().then(res => callbeck(res))
    }
    else {
        console.log('error Щось пішло не так. Перезавантажте сторінку.');
        loader.classList.add('_hiden');
    }
};

// Функція підбирає алт. картинку необхідного розміру.
function altImage(src){
    if(src.includes('starships') || src.includes('vehicles')){
        return starships
    }
    else if(src.includes('planets') ){
        return planets
    }
    else {
        return characters
    }
};

// Функція робить запит для перевірки src картинок.
export async function validImage(src, alt, callbeck, id=src){
    const rez = await fetch(src);
    if(rez.ok){
        callbeck(id, `<img src=${src} alt=${alt}>`)
    }else {
        callbeck(id,`<img src=${altImage(src)} alt=${alt}>`)
    }
};