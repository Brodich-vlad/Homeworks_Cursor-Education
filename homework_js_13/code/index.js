import { 
    createIdGenerator,
    newFontGenerator,
} from './my_functions.js';

const idGenerator = createIdGenerator();

const fontGenerator = newFontGenerator(14);

render(fontGenerator.next().value);

// Вивід прикладів на сторінку.
document.getElementById('decision_1').innerHTML =
    `idGenerator.next( ).value =>  ${idGenerator.next().value} <br>
    idGenerator.next( ).value => ${idGenerator.next().value} <br> 
    idGenerator.next( ).value => ${idGenerator.next().value} `;



document.getElementById('decision_2').innerHTML =
    `fontGenerator.next( "up" ).value =>  ${fontGenerator.next("up").value} <br>
    fontGenerator.next( "up" ).value => ${fontGenerator.next("up").value} <br> 
    fontGenerator.next( "up" ).value => ${fontGenerator.next("up").value} <br>
    fontGenerator.next( ).value =>  ${fontGenerator.next().value} <br>
    fontGenerator.next( "down" ).value => ${fontGenerator.next("down").value} <br> 
    fontGenerator.next( "down" ).value => ${fontGenerator.next("down").value} <br>
    fontGenerator.next( "down" ).value => ${fontGenerator.next("down").value} <br> 
    fontGenerator.next( ).value => ${fontGenerator.next().value}`;



function render(num){
    const elem = document.getElementById('decision_3');
    elem.style.fontSize = `${num}px`;
    elem.innerHTML = `Тестовий елемент має - font-size: ${num} px`;
}

document.querySelector('.control').addEventListener('click', (ev)=>{
    if(ev.target.id){
        render(fontGenerator.next(ev.target.id).value)
    }
});
