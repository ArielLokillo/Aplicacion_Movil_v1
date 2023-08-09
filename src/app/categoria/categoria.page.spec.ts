import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CATEGORIAPage } from './categoria.page';

describe('CATEGORIAPage', () => {
  let component: CATEGORIAPage;
  let fixture: ComponentFixture<CATEGORIAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CATEGORIAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
