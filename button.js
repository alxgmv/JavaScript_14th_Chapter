
class Counter {

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
let btn = document.getElementById("btn");
let cnt = new Counter(0);
let output = document.getElementById("counter");

btn.onclick = function () {
  cnt.increment();
  output.innerHTML = "Counter: " + cnt.getCounter();
}
