import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCountValue, selectPreviousCountValue } from '../../store/app.selector';
import { counterActions } from '../../store/app.actions';

@Component({
  imports: [],
  selector: 'app-my-counter',
  styleUrl: './my-counter.scss',
  templateUrl: './my-counter.html',
})
export class MyCounter {
  private readonly store = inject(Store);
  readonly counter$= this.store.selectSignal(selectCountValue);
  readonly previousCounter$= this.store.selectSignal(selectPreviousCountValue);

  onIncrease(){
    this.store.dispatch(counterActions.increment())
  };

  onDecrease() {
    this.store.dispatch(counterActions.decrement());
  };

  onReset(){
    this.store.dispatch(counterActions.resetAll())
  }
}
