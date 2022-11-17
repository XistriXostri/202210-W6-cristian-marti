export function startingCelsAlive(dimensions) {
    const numOfCelsAlive = Math.floor(dimensions * dimensions * 0.25);
    const celsAlive = [];
    let newCel;

    for (let i = 0; i < numOfCelsAlive; i++) {
        do {
            newCel = getRandomCoordinate(dimensions);
        } while (checkIfCelIsAlreadyAlive(celsAlive, newCel));
        celsAlive.push(newCel);
    }
    return celsAlive;
}
function getRandomCoordinate(dimensions) {
    const coordinate = [];
    do {
        coordinate.push(Math.floor(Math.random() * dimensions));
    } while (coordinate.length < 2);
    return coordinate;
}

function checkIfCelIsAlreadyAlive(celsAlive, newCel) {
    celsAlive.forEach((celAlive) => {
        if (newCel === celAlive) return true;
    });
    return false;
}
