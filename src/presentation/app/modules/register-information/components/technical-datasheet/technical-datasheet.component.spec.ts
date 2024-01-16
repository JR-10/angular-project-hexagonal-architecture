import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDatasheetComponent } from './technical-datasheet.component';

describe('TechnicalDatasheetComponent', () => {
  let component: TechnicalDatasheetComponent;
  let fixture: ComponentFixture<TechnicalDatasheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TechnicalDatasheetComponent]
    });
    fixture = TestBed.createComponent(TechnicalDatasheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
