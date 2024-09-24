class Billing {
  #amount = 1000;

  calculateTotal = (billing) => {
    return (this.#amount += billing.value);
  };
  getAmount = () => this.#amount;
}

class FixBilling extends Billing {
  constructor() {
    super();
  }
  calculateTotal = () => this.getAmount();
}

class HourBilling extends Billing {
  constructor(hour) {
    super();
    this.hour = hour ?? 0;
  }
  calculateTotal = () => {
    return this.getAmount() * this.hour;
  };
}

class ItemBilling extends Billing {
  constructor(elements) {
    super();
    this.elements = elements ?? [];
  }

  calculateTotal = () => {
    if (this.elements.length === 0) {
      throw new Error("не валидные данные");
    }
    return this.getAmount() * this.elements.length;
  };
}

const billing = new Billing();
const fixBilling = new FixBilling();
const hourBilling = new HourBilling(5);
const itemBilling = new ItemBilling([1, 2, 3]);
