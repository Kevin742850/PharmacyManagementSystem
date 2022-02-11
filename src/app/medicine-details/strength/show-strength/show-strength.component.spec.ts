import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStrengthComponent } from './show-strength.component';

describe('ShowStrengthComponent', () => {
  let component: ShowStrengthComponent;
  let fixture: ComponentFixture<ShowStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStrengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
