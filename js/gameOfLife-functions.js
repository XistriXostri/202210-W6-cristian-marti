export function checkAdjacentsCoordinates(dimensions, i, j) {
    let coordinatesAdjacents = [];
    if (j > 0) {
        coordinatesAdjacents.push([i, j - 1]);
        if (i > 0) {
            coordinatesAdjacents.push([i - 1, j - 1]);
        }
        if (i < dimensions - 1) {
            coordinatesAdjacents.push([i + 1, j - 1]);
        }
    }
    if (j < dimensions - 1) {
        coordinatesAdjacents.push([i, j + 1]);
        if (i < dimensions - 1) {
            coordinatesAdjacents.push([i + 1, j + 1]);
        }
        if (i > 0) {
            coordinatesAdjacents.push([i - 1, j + 1]);
        }
    }
    if (i > 0) {
        coordinatesAdjacents.push([i - 1, j]);
    }
    if (i < dimensions - 1) {
        coordinatesAdjacents.push([i + 1, j]);
    }
    return coordinatesAdjacents;
}

export function createMatrix(dimensions) {
    let matrix = [];
    for (let i = 0; i < dimensions; i++) {
        matrix.push([]);
        for (let j = 0; j < dimensions; j++) {
            matrix[i].push({
                alive: false,
                adjacentsAlive: 0,
                rightSide: j === dimensions - 1,
                coordinates: [i, j],
                coordinatesAdjacents: checkAdjacentsCoordinates(
                    dimensions,
                    i,
                    j
                ),
            });
        }
    }
    return matrix;
}

export function increaseAdjacent(cel, matrix) {
    cel.coordinatesAdjacents.forEach((coordinate) => {
        let i = coordinate[0];
        let j = coordinate[1];
        matrix[i][j].adjacentsAlive++;
    });
}
export function celAliveOrDead(cel, matrix) {
    if (cel.alive) {
        increaseAdjacent(cel, matrix);
        return 'O';
    }
    return '·';
}
export function showMatrix(matrix) {
    let table = '';
    matrix.forEach((row) => {
        row.forEach((cel) => {
            table = table + celAliveOrDead(cel, matrix);
            if (!cel.rightSide) table = table + ' ';
        });
        table = table + '\n';
    });
    return console.log(table);
}

export function bornLiveOrDie(cel) {
    if (cel.adjacentsAlive === 3 && !cel.alive) return true;
    if (2 > cel.adjacentsAlive || 3 < cel.adjacentsAlive) return false;
    return cel.alive;
}
export function envolveCels(matrix) {
    matrix.forEach((row) => {
        row.forEach((cel) => {
            cel.alive = bornLiveOrDie(cel);
            cel.adjacentsAlive = 0;
        });
    });
    showMatrix(matrix);
}
