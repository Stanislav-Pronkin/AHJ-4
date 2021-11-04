import luhnAlgorithm from '../js/luhnalgorithm';

test.each([
  ['should return true for valid number', '371449635398431', true],
  ['should return false for invalid number', '371449635', false],
])(('Validate card number %s'), (_, input, expected) => {
  expect(luhnAlgorithm(input)).toBe(expected);
});
