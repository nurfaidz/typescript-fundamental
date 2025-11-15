import { describe, test, expect } from 'vitest';
import { sayHello } from '../src/say-hello';

describe('sayHello', () => {
    test('should return greeting message with provided name', () => {
        const result = sayHello('Alice');
        expect(result).toBe('Hello, Alice!');
    });
});