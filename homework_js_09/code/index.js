import { 
    generateBlocks,
    generateBlocksInterval,

} from './my_functions.js';

// Вивід прикладів на сторінку.

document.getElementById('decision_1').innerHTML =
    `generateBlocks( ) =>`;

generateBlocks('#decision_2')



document.getElementById('decision_3').innerHTML =
    `generateBlocksInterval( ) =>`;

generateBlocksInterval()    