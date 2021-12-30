import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertInspectionComponent } from './upsert-inspection.component';

describe('UpsertInspectionComponent', () => {
  let component: UpsertInspectionComponent;
  let fixture: ComponentFixture<UpsertInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsertInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
