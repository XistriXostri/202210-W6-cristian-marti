import { createMatrix, showMatrix } from './index.js';

describe('Given createMatrix function', () => {
    const givenAndExpectedCases = [
        {
            given: 2,
            expected: [
                [0, 0],
                [0, 0],
            ],
        },
        {
            given: 3,
            expected: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ],
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of ${it.given} should be ${it.expected}`, () => {
            expect(createMatrix(it.given)).toStrictEqual(it.expected);
        });
    });
});

describe('Given showMatrix function', () => {
    const givenAndExpectedCases = [
        {
            given: [
                [0, 0],
                [0, 0],
            ],
            expected: '0 0 \n0 0 ',
        },
        {
            given: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ],
            expected: '0 0 0 \n0 0 0 \n0 0 0 ',
        },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of ${it.given} should be ${it.expected}`, () => {
            expect(showMatrix(it.given)).toStrictEqual(it.expected);
        });
    });
});
