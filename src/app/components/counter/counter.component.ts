import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counterValue = 0;

  constructor(private counterService: CounterService) {
    this.counterService.counter$.subscribe(value => {
      this.counterValue = value;
    });
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.setCount(0); // Reset counter to zero
  }
}
