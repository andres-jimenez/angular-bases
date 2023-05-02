import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 10;

  decreaseBy(value: number = 1): void {
    if (this.counter - value < 1) {
      this.counter = 0;

      return;
    }

    this.counter -= value;
  }

  reset() {
    this.counter = 10;
  }

  increaseBy(value: number = 1): void {
    this.counter += value;
  }
}
