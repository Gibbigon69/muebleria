import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsDogsComponent } from './cats-dogs.component';

describe('CatsDogsComponent', () => {
  let component: CatsDogsComponent;
  let fixture: ComponentFixture<CatsDogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsDogsComponent]
    });
    fixture = TestBed.createComponent(CatsDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
