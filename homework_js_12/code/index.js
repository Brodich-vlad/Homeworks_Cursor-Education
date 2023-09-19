import {
   myGetElement,
   createElement,
   scrollTop,
   createValidArray,
   createValidObj,
} from './my_functions.js';
import {req, validImage} from './req.js';
import {createUrl} from './create_url.js';

const sectionResult = myGetElement('.section-result');
const title = myGetElement('.section-result_title');
const root = myGetElement('#root');
const pagination = myGetElement('.pagination');

const modal = myGetElement('.modal');
const modalContent = myGetElement('.modal-content');
const loader = myGetElement('.wrapper_loader');

const [...elCategory] = document.querySelectorAll('.navigation__item');

let caunt = 800;
elCategory.forEach((e)=>{
    caunt += 300;
    e.addEventListener('click',()=>{
        sectionResult.classList.remove('_show');
        title.innerText = e.dataset.category === "people" ? 
            'characters' : 
            e.dataset.category;
        req(createUrl(e.dataset.category),showResult);
    });

    setTimeout(()=>{
        e.classList.add('show');
    },caunt);
});

// Функція закриття модального вікна.
modal.addEventListener('click',(ev)=>{
    if(ev.target.classList.value === 'modal' || ev.target.classList.value === 'btn_close'){
        modal.classList.add('_hiden');
    }
});



// Функція створює елемент опису.
function createEl(obj,stopStr){
    let str =''
    for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            if(obj[key] && !stopStr.includes(key)){
                str += `<p>${key.replace('_', ' ')} : <span>${obj[key]}</span></p>`
            }
        }
    }
    return str;
};

// Функція виводу модального вікна.
function showModal(obj){
    const stopStr = 'title image url id category';
    modalContent.innerHTML = '';
    modal.classList.remove('_hiden');
    const newObj = createValidObj(obj);
    const el = `<div class="modal-content_img" id="modal-img"></div>
        <div class="modal-content_info">
            <h3>${newObj.title}</h3>
            ${createEl(newObj, stopStr)}

        </div>`;

    modalContent.insertAdjacentHTML("beforeend",el);

    validImage(newObj.image, newObj.title, showImage,'modal-img');
    loader.classList.add('_hiden');
};

// Функція виводу списку карточок.
function showList(arr){
    const stopStr = 'title image url id category gravity description height mass hair_color skin_color eye_color cost crew passengers cargo_capacity manufacturer terrain';
    root.innerHTML = '';
    arr.forEach((obj)=>{
        const li = createElement('li',"result-list_item")
        const el = `<div class="item_img" id=${obj.image}></div>
        <div class="item_info">
            <h3>${obj.title}</h3>
            ${createEl(obj, stopStr)}
        </div>`;
    
        li.addEventListener('click',()=>{
            req(obj.url, showModal)
        });
        li.innerHTML = el;
        root.append(li);
        validImage(obj.image, obj.title, showImage);  
    })
};

// Функція виводу картинки.
function showImage(id, content){
    document.getElementById(id).innerHTML = content;
};

// Функція виводу сторінок.
function showResult({previous,next,results}){
    sectionResult.classList.add('_show');

    pagination.innerHTML = '';

    if(next || previous){
        const btnNext = createElement('button','pagination_btn next','next<span> &#10095;</span>')
        btnNext.type= 'button';
        btnNext.disabled = next ? false : true;
        btnNext.addEventListener('click', ()=>{
            req(next, showResult);
            scrollTop();
        });

        const btnPrev = createElement('button','pagination_btn prev','<span>&#10094; </span> prev');
        btnPrev.type= 'button';
        btnPrev.disabled = previous ? false : true;
        btnPrev.addEventListener('click', ()=>{
            req(previous, showResult);
            scrollTop();
        });

        pagination.append(btnPrev);
        pagination.append(btnNext);
    };

    showList(createValidArray(results));

    loader.classList.add('_hiden');
};
