import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMarcaComponent } from './buscar-marca.component';

describe('BuscarMarcaComponent', () => {
  let component: BuscarMarcaComponent;
  let fixture: ComponentFixture<BuscarMarcaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarMarcaComponent]
    });
    fixture = TestBed.createComponent(BuscarMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
