import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PERSONAJESPage } from './personajes.page';

describe('PERSONAJESPage', () => {
  let component: PERSONAJESPage;
  let fixture: ComponentFixture<PERSONAJESPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PERSONAJESPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
