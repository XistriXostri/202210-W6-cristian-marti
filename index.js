import {
    createMatrix,
    showMatrix,
    envolveCels,
} from './js/gameOfLife-functions.js';

import { startingCelsAlive } from './js/startingCelsAlive.js';

function gameOfLife(dimensions, times) {
    let countTimes = 0;
    let map = createMatrix(dimensions);
    let celsAlive = startingCelsAlive(dimensions);

    celsAlive.forEach((celAlive) => {
        let i = celAlive[0];
        let j = celAlive[1];
        map[i][j].alive = true;
    });

    console.log('Matriz inicial:');
    showMatrix(map);
    while (countTimes < times) {
        countTimes++;
        console.log('Round ' + countTimes);
        envolveCels(map);
    }
}
function checkAnswerIsInt(question) {
    if (
        question.vMin - 1 < question.answer &&
        question.answer < question.vMax + 1
    ) {
        return true;
    }
    alert(question.error);
    return false;
}

let userOptions = [
    {
        option: 'dimension',
        question: '¿De cuantas dimensiones quieres que sea el tablero?',
        error: `Error, el número introducido debe ser un número entero entre el 3 y el 50`,
        vMax: 50,
        vMin: 3,
        answer: null,
    },
    {
        option: 'times',
        question: '¿Cuantas veces quieres que se repita?',
        error: `Error, el número introducido debe ser un número entero entre el 3 y el 100`,
        vMax: 100,
        vMin: 3,
        answer: null,
    },
];

userOptions.forEach((option) => {
    do {
        option.answer = prompt(option.question);
    } while (!checkAnswerIsInt(option));
});

gameOfLife(userOptions[0].answer, userOptions[1].answer);
