import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuebleriaComponent } from './muebleria.component';

describe('MuebleriaComponent', () => {
  let component: MuebleriaComponent;
  let fixture: ComponentFixture<MuebleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuebleriaComponent]
    });
    fixture = TestBed.createComponent(MuebleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
