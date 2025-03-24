import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject<number>(0);
  counter$ = this.counter.asObservable();

  setCount(count: number) {
    this.counter.next(count);
  }

  increment() {
    this.counter.next(this.counter.value + 1);
  }

  decrement() {
    if (this.counter.value > 0) {
      this.counter.next(this.counter.value - 1);
    }
  }
}
