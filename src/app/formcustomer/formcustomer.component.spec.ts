import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcustomerComponent } from './formcustomer.component';

describe('FormcustomerComponent', () => {
  let component: FormcustomerComponent;
  let fixture: ComponentFixture<FormcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
