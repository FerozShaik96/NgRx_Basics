import { Component, inject } from '@angular/core';
import { MyCounter } from './components/my-counter/my-counter';
import { Store } from '@ngrx/store';
import { selectThemeValue } from './store/themeStore/theme.selector';
import { themeActions } from './store/themeStore/theme.actions';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [MyCounter, MatSlideToggle],
})
export class App {

  private readonly store = inject(Store);


  readonly theme = this.store.selectSignal(selectThemeValue);

  onThemeToggle(){
    this.store.dispatch(themeActions.themeToggle());
  }
}
