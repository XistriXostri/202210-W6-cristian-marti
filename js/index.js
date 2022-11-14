let gameOfLife = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(gameOfLife[0][0], gameOfLife[0][1], gameOfLife[0][2]);
console.log(gameOfLife[1][0], gameOfLife[1][1], gameOfLife[1][2]);
console.log(gameOfLife[2][0], gameOfLife[2][1], gameOfLife[2][2]);

export function createMatrix(dimensions) {
    let matrix = [];
    for (let i = 0; i < dimensions; i++) {
        matrix.push([]);
        for (let j = 0; j < dimensions; j++) {
            matrix[i].push(0);
        }
    }
    return matrix;
}

//faltaba exportar
export function showMatrix(matrix) {
    let table = '';
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            table = table + matrix[i][j];
            if (j < matrix[i].length - 1) {
                table = table + ' ';
            }
        }
        table = table + '\n';
    }
    return table;
}

let matrix = createMatrix(5);
console.log(showMatrix(matrix));

// export function showMatrix(matrix) {
//     let table = '';
//     matrix.forEach((row) => {
//         row.forEach((element) => {
//             table = table + element + ' ';
//         });
//         table = table + '\n';
//     });
//     return table;
// }
