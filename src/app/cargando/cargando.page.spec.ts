import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CARGANDOPage } from './cargando.page';

describe('CARGANDOPage', () => {
  let component: CARGANDOPage;
  let fixture: ComponentFixture<CARGANDOPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CARGANDOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
