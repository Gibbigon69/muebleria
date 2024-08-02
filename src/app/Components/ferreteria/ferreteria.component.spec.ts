import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerreteriaComponent } from './ferreteria.component';

describe('FerreteriaComponent', () => {
  let component: FerreteriaComponent;
  let fixture: ComponentFixture<FerreteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FerreteriaComponent]
    });
    fixture = TestBed.createComponent(FerreteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
