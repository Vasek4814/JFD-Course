import { DonateForm } from '../modules/donate-form';
import { DonateList } from '../modules/donate-list';

export default class App {
  #donateForm;
  #donateList;
  constructor() {
    this.state = { donates: [], totalAmount: 0 };
    this.#donateForm = new DonateForm(this.state.totalAmount);
    this.#donateForm.updateTotalAmount(this.state.totalAmount);
    this.#donateList = new DonateList(this.state.donates);
    this.#donateList = new DonateList()
    
    
  }
  run() {
    this.body = document.querySelector('body');
    this.body.textContent = 'Hello world';
    const donateFormeHTML = this.#donateForm.render();
    const donateListHTML = this.#donateList.render();
    document.body.append(donateFormeHTML, donateListHTML);
  }
}





export class DonateList {
  #container;
  constructor(stateDonates) {
    this.donates = [
      { amount: 4, date: new Date() },
      { amount: 20, date: new Date() },
      { amount: 3, date: new Date() },
      { amount: 1, date: new Date() },
    ];
    this.#container = document.createElement('div');
    this.#container.className = 'donates-container';
    this.stateDonates = stateDonates;
  }
  render() {
    const h2 = document.createElement('h2');
    h2.className = 'donates-container__title';
    h2.textContent = 'Список донатов';

    const divDonates = document.createElement('div');
    divDonates.className = 'donates-container__donates';

    this.donates.forEach((donate) => {
      this.amount = donate.amount;
      this.date = donate.date;
      const divDonateItem = document.createElement('div');
      divDonateItem.classname = 'donate-item';
      divDonateItem.textContent = `${this.date} - `;

      const b = document.createElement('b');
      b.textContent = `${this.amount}`;
      divDonates.append(divDonateItem, b);
    });
    this.#container.append(h2, divDonates);
    return this.#container;
  }

  updateDonates(updatedDonates) {
    divDonates = document.querySelector('.donates-container__donates');
    divDonates.innerHTML = '';
    console.log(updatedDonates)
  }
}
