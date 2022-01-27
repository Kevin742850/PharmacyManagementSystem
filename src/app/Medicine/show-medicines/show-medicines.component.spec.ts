import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMedicinesComponent } from './show-medicines.component';

describe('ShowMedicinesComponent', () => {
  let component: ShowMedicinesComponent;
  let fixture: ComponentFixture<ShowMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMedicinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
