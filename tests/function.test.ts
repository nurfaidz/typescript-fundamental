import { describe, expect, test } from "vitest"

describe('Function', () => {
    // function types
    test('should support function types', () => {
        function greet(name: string): string {
            return `Hello, ${name}!`;
        }

        const result = greet("Alice");

        expect(result).toBe("Hello, Alice!");
        
        function printMesassage(message: string): void {
            return;
        }

        expect(printMesassage("Test message")).toBeUndefined();
    })

    // for optional parameters in function
    test('should support default values in function parameters', () => {
        function greet(name: string = "Alice"): string {
            return `Hello, ${name}!`;
        }

        const result = greet();

        expect(result).toBe("Hello, Alice!");
        expect(greet("Bob")).toBe("Hello, Bob!");
    })

    // rest parameters in function, exactly like varargs in javascript
    test('should support rest parameters in functions', () => {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
        expect(sum(10, 20, 30)).toBe(60);
    })

    // function overloading
    test('should support function overloading', () => {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if (typeof value === "string") {
                return value;
            } else if (typeof value === "number") {
                return value;
            }
        }

        expect(callMe(100)).toBe(100);
        expect(callMe("Hello")).toBe("Hello");
    })

    // function as parameter
    test('should support functions as parameters', () => {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello, ${filter(name)}!`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Alice", toUpper)).toBe("Hello, ALICE!");
    })
})