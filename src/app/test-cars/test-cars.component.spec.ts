import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCarsComponent } from './test-cars.component';

describe('TestCarsComponent', () => {
  let component: TestCarsComponent;
  let fixture: ComponentFixture<TestCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
