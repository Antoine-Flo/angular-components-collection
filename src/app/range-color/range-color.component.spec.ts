import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeColorComponent } from './range-color.component';

describe('RangeColorComponent', () => {
  let component: RangeColorComponent;
  let fixture: ComponentFixture<RangeColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
