import generateRandomNumber from '..';

describe('generateRandomNumber', () => {
  test('should return a random number with 1 number', () => {
    expect(generateRandomNumber()).toHaveLength(1);
  });

  test('should return a random number with 42 numbers', () => {
    expect(generateRandomNumber(42)).toHaveLength(42);
  });
});
