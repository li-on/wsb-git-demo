import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorespondencjaComponent } from './korespondencja.component';

describe('KorespondencjaComponent', () => {
  let component: KorespondencjaComponent;
  let fixture: ComponentFixture<KorespondencjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorespondencjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorespondencjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
