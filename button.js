 export default class Counter {

  constructor(x) {
    this.counter = x;
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }

}
