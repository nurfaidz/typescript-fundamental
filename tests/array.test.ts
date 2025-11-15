import { describe, expect, test } from "vitest"

// This test demonstrates the use of the array data type.
describe('array data type', () => {
    test('should create and manipulate array', () => {
        let list: string[] = [
            'John',
            'Doe',
            'Jane',
            'Smith'
        ];

        list.push('Alice');

        expect(list.length).toBe(5);
    });

    test('should access array elements by index', () => {
        let numbers: number[] = [10, 20, 30, 40, 50];
        expect(numbers[0]).toBe(10);
        expect(numbers[1]).toBe(20);
        expect(numbers[2]).toBe(30);
        expect(numbers[3]).toBe(40);
        expect(numbers[4]).toBe(50);
    });
});