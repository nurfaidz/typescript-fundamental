import { describe, expect, test } from "vitest";

describe('If Statement', () => {
    // if statement
    test('should support if statement', () => {
        const score = 85;

        if (score >= 90) {
            console.log('A');
        } else if (score >= 80) {
            console.log('B');
        } else if (score >= 70) {
            console.log('C');
        } else {
            console.log('D');
        }
    })

    // using ternary operator
    test('should support ternary operator', () => {
        const age = 20;
        const canVote = age >= 18 ? 'Yes' : 'No';
        expect(canVote).toBe('Yes');
    })
})