import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCounter } from './my-counter';

describe('MyCounter', () => {
  let component: MyCounter;
  let fixture: ComponentFixture<MyCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(MyCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
