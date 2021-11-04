export default function getPayment(cardNumber) {
  if (/^4/.test(cardNumber)) {
    return 'Visa';
  }
  if (/^5[1-5]/.test()) {
    return 'MasterCard';
  }
  if (/^2/.test(cardNumber)) {
    return 'MIR';
  }
  if (/^3[15]/.test(cardNumber)) {
    return 'JCB';
  }
  if (/^3[068]/.test(cardNumber)) {
    return 'Diners_Club';
  }
  if (/^60/.test(cardNumber)) {
    return 'Discover';
  }
  if (/^3[47]/.test(cardNumber)) {
    return 'American_Express';
  }
  return false;
}
