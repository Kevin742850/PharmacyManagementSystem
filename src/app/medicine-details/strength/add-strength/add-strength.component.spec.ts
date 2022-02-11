import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStrengthComponent } from './add-strength.component';

describe('AddStrengthComponent', () => {
  let component: AddStrengthComponent;
  let fixture: ComponentFixture<AddStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStrengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
