import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPharmacyComponent } from './show-pharmacy.component';

describe('ShowPharmacyComponent', () => {
  let component: ShowPharmacyComponent;
  let fixture: ComponentFixture<ShowPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
