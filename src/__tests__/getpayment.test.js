import getPayment from '../js/getpayment';

test.each([
  ['American Express', '371449635398431', 'American_Express'],
  ['Diners Club', '30569309025904', 'Diners_Club'],
  ['Discover', '6011111111111117', 'Discover'],
  ['JCB', '3530111333300000', 'JCB'],
  ['Discover', '9991111117', false],
])(('Payment system %s'), (_, input, expected) => {
  expect(getPayment(input)).toBe(expected);
});
