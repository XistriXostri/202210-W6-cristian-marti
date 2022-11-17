import {
    checkAdjacentsCoordinates,
    createMatrix,
    celAliveOrDead,
    showMatrix,
    bornLiveOrDie,
} from './gameOfLife-functions.js';

describe('Given checkAdjacentsCoordinates function', () => {
    const givenAndExpectedCases = [
        {
            givenDimensions: 5,
            givenI: 0,
            givenJ: 0,
            expected: [
                [0, 1],
                [1, 1],
                [1, 0],
            ],
        },
        {
            givenDimensions: 3,
            givenI: 0,
            givenJ: 0,
            expected: [
                [0, 1],
                [1, 1],
                [1, 0],
            ],
        },
        {
            givenDimensions: 5,
            givenI: 2,
            givenJ: 3,
            expected: [
                [2, 2],
                [1, 2],
                [3, 2],
                [2, 4],
                [3, 4],
                [1, 4],
                [1, 3],
                [3, 3],
            ],
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of ${it.givenI} and ${it.givenJ} on ${it.givenDimensions} should be ${it.expected}`, () => {
            expect(
                checkAdjacentsCoordinates(
                    it.givenDimensions,
                    it.givenI,
                    it.givenJ
                )
            ).toStrictEqual(it.expected);
        });
    });
});

describe('Given createMatrix function', () => {
    const givenAndExpectedCases = [
        {
            given: 2,
            expected: [
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [0, 0],
                        coordinatesAdjacents: [
                            [0, 1],
                            [1, 1],
                            [1, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [0, 1],
                        coordinatesAdjacents: [
                            [0, 0],
                            [1, 0],
                            [1, 1],
                        ],
                    },
                ],
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [1, 0],
                        coordinatesAdjacents: [
                            [1, 1],
                            [0, 1],
                            [0, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [1, 1],
                        coordinatesAdjacents: [
                            [1, 0],
                            [0, 0],
                            [0, 1],
                        ],
                    },
                ],
            ],
        },
        {
            given: 3,
            expected: [
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [0, 0],
                        coordinatesAdjacents: [
                            [0, 1],
                            [1, 1],
                            [1, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [0, 1],
                        coordinatesAdjacents: [
                            [0, 0],
                            [1, 0],
                            [0, 2],
                            [1, 2],
                            [1, 1],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [0, 2],
                        coordinatesAdjacents: [
                            [0, 1],
                            [1, 1],
                            [1, 2],
                        ],
                    },
                ],
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [1, 0],
                        coordinatesAdjacents: [
                            [1, 1],
                            [2, 1],
                            [0, 1],
                            [0, 0],
                            [2, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [1, 1],
                        coordinatesAdjacents: [
                            [1, 0],
                            [0, 0],
                            [2, 0],
                            [1, 2],
                            [2, 2],
                            [0, 2],
                            [0, 1],
                            [2, 1],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [1, 2],
                        coordinatesAdjacents: [
                            [1, 1],
                            [0, 1],
                            [2, 1],
                            [0, 2],
                            [2, 2],
                        ],
                    },
                ],
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [2, 0],
                        coordinatesAdjacents: [
                            [2, 1],
                            [1, 1],
                            [1, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [2, 1],
                        coordinatesAdjacents: [
                            [2, 0],
                            [1, 0],
                            [2, 2],
                            [1, 2],
                            [1, 1],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [2, 2],
                        coordinatesAdjacents: [
                            [2, 1],
                            [1, 1],
                            [1, 2],
                        ],
                    },
                ],
            ],
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of ${it.given} should be ${it.expected}`, () => {
            expect(createMatrix(it.given)).toStrictEqual(it.expected);
        });
    });
});

describe('Given celAliveOrDead function', () => {
    const givenAndExpectedCases = [
        {
            givenCel: {
                alive: false,
                adjacentsAlive: 0,
                rightSide: false,
                coordinates: [0, 0],
                coordinatesAdjacents: [
                    [0, 1],
                    [1, 1],
                    [1, 0],
                ],
            },
            givenMatrix: [
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [0, 0],
                        coordinatesAdjacents: [
                            [0, 1],
                            [1, 1],
                            [1, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [0, 1],
                        coordinatesAdjacents: [
                            [0, 0],
                            [1, 0],
                            [1, 1],
                        ],
                    },
                ],
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [1, 0],
                        coordinatesAdjacents: [
                            [1, 1],
                            [0, 1],
                            [0, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [1, 1],
                        coordinatesAdjacents: [
                            [1, 0],
                            [0, 0],
                            [0, 1],
                        ],
                    },
                ],
            ],
            expected: 'O',
        },
        {
            givenCel: {
                alive: true,
                adjacentsAlive: 0,
                rightSide: false,
                coordinates: [0, 0],
                coordinatesAdjacents: [
                    [0, 1],
                    [1, 1],
                    [1, 0],
                ],
            },
            givenMatrix: [
                [
                    {
                        alive: true,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [0, 0],
                        coordinatesAdjacents: [
                            [0, 1],
                            [1, 1],
                            [1, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [0, 1],
                        coordinatesAdjacents: [
                            [0, 0],
                            [1, 0],
                            [1, 1],
                        ],
                    },
                ],
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [1, 0],
                        coordinatesAdjacents: [
                            [1, 1],
                            [0, 1],
                            [0, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [1, 1],
                        coordinatesAdjacents: [
                            [1, 0],
                            [0, 0],
                            [0, 1],
                        ],
                    },
                ],
            ],
            expected: 'X',
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of ${it.givenCel} and ${it.givenMatrix} should be ${it.expected}`, () => {
            expect(celAliveOrDead(it.givenCel, it.givenMatrix)).toStrictEqual(
                it.expected
            );
        });
    });
});

describe('Given showMatrix function', () => {
    const givenAndExpectedCases = [
        {
            given: [
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [0, 0],
                        coordinatesAdjacents: [
                            [0, 1],
                            [1, 1],
                            [1, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [0, 1],
                        coordinatesAdjacents: [
                            [0, 0],
                            [1, 0],
                            [1, 1],
                        ],
                    },
                ],
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [1, 0],
                        coordinatesAdjacents: [
                            [1, 1],
                            [0, 1],
                            [0, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [1, 1],
                        coordinatesAdjacents: [
                            [1, 0],
                            [0, 0],
                            [0, 1],
                        ],
                    },
                ],
            ],
            expected: console.log('O O\nO O'),
        },
        {
            given: [
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [0, 0],
                        coordinatesAdjacents: [
                            [0, 1],
                            [1, 1],
                            [1, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [0, 1],
                        coordinatesAdjacents: [
                            [0, 0],
                            [1, 0],
                            [0, 2],
                            [1, 2],
                            [1, 1],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [0, 2],
                        coordinatesAdjacents: [
                            [0, 1],
                            [1, 1],
                            [1, 2],
                        ],
                    },
                ],
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [1, 0],
                        coordinatesAdjacents: [
                            [1, 1],
                            [2, 1],
                            [0, 1],
                            [0, 0],
                            [2, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [1, 1],
                        coordinatesAdjacents: [
                            [1, 0],
                            [0, 0],
                            [2, 0],
                            [1, 2],
                            [2, 2],
                            [0, 2],
                            [0, 1],
                            [2, 1],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [1, 2],
                        coordinatesAdjacents: [
                            [1, 1],
                            [0, 1],
                            [2, 1],
                            [0, 2],
                            [2, 2],
                        ],
                    },
                ],
                [
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [2, 0],
                        coordinatesAdjacents: [
                            [2, 1],
                            [1, 1],
                            [1, 0],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: false,
                        coordinates: [2, 1],
                        coordinatesAdjacents: [
                            [2, 0],
                            [1, 0],
                            [2, 2],
                            [1, 2],
                            [1, 1],
                        ],
                    },
                    {
                        alive: false,
                        adjacentsAlive: 0,
                        rightSide: true,
                        coordinates: [2, 2],
                        coordinatesAdjacents: [
                            [2, 1],
                            [1, 1],
                            [1, 2],
                        ],
                    },
                ],
            ],
            expected: console.log('O O O\nO O O\nO O O'),
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of ${it.given} should be ${it.expected}`, () => {
            expect(showMatrix(it.given)).toStrictEqual(it.expected);
        });
    });
});

describe('Given bornLiveOrDie function', () => {
    const givenAndExpectedCases = [
        {
            given: {
                alive: false,
                adjacentsAlive: 3,
                rightSide: false,
                coordinates: [0, 0],
                coordinatesAdjacents: [
                    [0, 1],
                    [1, 1],
                    [1, 0],
                ],
            },
            expected: true,
        },
        {
            given: {
                alive: true,
                adjacentsAlive: 2,
                rightSide: false,
                coordinates: [1, 0],
                coordinatesAdjacents: [
                    [1, 1],
                    [0, 1],
                    [0, 0],
                ],
            },
            expected: true,
        },
        {
            given: {
                alive: true,
                adjacentsAlive: 3,
                rightSide: false,
                coordinates: [0, 0],
                coordinatesAdjacents: [
                    [0, 1],
                    [1, 1],
                    [1, 0],
                ],
            },
            expected: true,
        },
        {
            given: {
                alive: true,
                adjacentsAlive: 1,
                rightSide: false,
                coordinates: [0, 0],
                coordinatesAdjacents: [
                    [0, 1],
                    [1, 1],
                    [1, 0],
                ],
            },
            expected: false,
        },
        {
            given: {
                alive: true,
                adjacentsAlive: 4,
                rightSide: false,
                coordinates: [0, 0],
                coordinatesAdjacents: [
                    [0, 1],
                    [1, 1],
                    [1, 0],
                ],
            },
            expected: false,
        },
        {
            given: {
                alive: false,
                adjacentsAlive: 2,
                rightSide: false,
                coordinates: [0, 0],
                coordinatesAdjacents: [
                    [0, 1],
                    [1, 1],
                    [1, 0],
                ],
            },
            expected: false,
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of ${it.given} should be ${it.expected}`, () => {
            expect(bornLiveOrDie(it.given)).toStrictEqual(it.expected);
        });
    });
});
