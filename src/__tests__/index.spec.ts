import { describe, it, expect } from 'vitest';
import { hello } from '../index';

describe('hello', () => {
  it('should return greeting with name', () => {
    expect(hello('Test')).toBe('Hello, Test!');
  });
});
