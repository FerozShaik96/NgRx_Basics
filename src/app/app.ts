import { Component } from '@angular/core';
import { MyCounter } from './components/my-counter/my-counter';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [MyCounter],
})
export class App {}
