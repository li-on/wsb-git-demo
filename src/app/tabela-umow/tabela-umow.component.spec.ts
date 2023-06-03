import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaUmowComponent } from './tabela-umow.component';

describe('TabelaUmowComponent', () => {
  let component: TabelaUmowComponent;
  let fixture: ComponentFixture<TabelaUmowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaUmowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaUmowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
