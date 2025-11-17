import { describe, expect, test } from "vitest";

describe('For Loop', () => {
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
});