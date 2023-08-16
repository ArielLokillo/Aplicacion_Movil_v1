import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RangoPage } from './rango.page';

describe('RangoPage', () => {
  let component: RangoPage;
  let fixture: ComponentFixture<RangoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
