import { describe, expect, test } from "vitest";

describe('Loop', () => {
    // for loop
    test('should support for loop', () => {
        const counter = [];

        for (let i = 0; i < 5; i++) {
            counter.push(i);
        }

        expect(counter).toEqual([0, 1, 2, 3, 4]);
    });

    // for..of loop
    test('should support for..of loop', () => {
        const fruits = ["Apple", "Banana", "Grapes"];
        const result: string[] = [];
        for (const fruit of fruits) {
            result.push(fruit);
        }
        expect(result).toEqual(["Apple", "Banana", "Grapes"]);
    });

    // for loop without init statement
    test('should support for loop without init statement', () => {
        const counter = [];
        let i = 0;
        for (; i < 3; i++) {
            counter.push(i);
        }
        expect(counter).toEqual([0, 1, 2]);
    });

    // for loop without increment statement
    test('should support for loop without increment statement', () => {
        const counter = [];
        for (let i = 0; i < 3;) {
            counter.push(i);
            i++;
        }
        expect(counter).toEqual([0, 1, 2]);
    });

       // while loop
    test('should support while loop', () => {
        const counter = [];
        let i = 0;
        while (i < 5) {
            counter.push(i);
            i++;
        }
        expect(counter).toEqual([0, 1, 2, 3, 4]);
    });

    // do..while loop
    test('should support do..while loop', () => {
        const counter = [];
        let i = 0;
        do {
            counter.push(i);
            i++;
        } while (i < 5);

        expect(counter).toEqual([0, 1, 2, 3, 4]);
    });

    test('should support break and continue', () => {
        const result = [];
        let i = 0;

        do {
            i++;

            if (i === 10) {
                break;
            }

            if (i % 2 === 0) {
                continue;
            }

            console.log(i);
            result.push(i);
        } while (true);

        expect(result).toEqual([1, 3, 5, 7, 9]);

    })
});