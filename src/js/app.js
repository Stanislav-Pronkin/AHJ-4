import getPayment from './getpayment';
import luhnAlgorithm from './luhnalgorithm';

export default class App {
  constructor() {
    this.checkForm = document.querySelector('.form-check');
    this.form = document.querySelector('.form');
    this.input = document.querySelector('.form-control');
    this.button = document.querySelector('.btn');
    this.card = document.querySelectorAll('.card');
    this.cardNumber = [];
    this.cardName;
  }

  init() {
    this.input.addEventListener('input', () => {
      this.cardNumber = this.input.value;

      if (this.input.classList.contains('valid')) {
        this.input.classList.remove('valid');
      }
      if (this.input.classList.contains('invalid')) {
        this.input.classList.remove('invalid');
      }

      getPayment(this.cardNumber);

      this.cardName = getPayment(this.cardNumber);

      this.viewCard();
      this.button.addEventListener('click', () => {
        this.checkValidate();
      });
    });
  }

  viewCard() {
    const activeNow = document.querySelector('.action');
    if (activeNow) {
      activeNow.classList.remove('action');
    }

    if (this.cardName) {
      const cardActive = document.querySelector(`.${this.cardName}`);

      cardActive.classList.add('action');
    }
  }

  checkValidate() {
    const validate = luhnAlgorithm(this.input.value);

    if (validate && this.cardNumber.length >= 14 && this.cardNumber.length <= 16) {
      this.input.classList.add('valid');
    } else {
      this.input.classList.add('invalid');
    }
  }
}
