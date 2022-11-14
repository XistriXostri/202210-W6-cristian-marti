import { foo } from './foo.js';

describe('Given foo function', () => {
    const givenAndExpectedCases = [
        { givenA: 1, givenB: 2, expected: 3 },
        { givenA: 2, givenB: 2, expected: 4 },
    ];

    givenAndExpectedCases.forEach((it) => {
        test(`The result of ${it.givenA} + ${it.givenB} should be ${it.expected}`, () => {
            expect(foo(it.givenA, it.givenB)).toBe(it.expected);
        });
    });
});