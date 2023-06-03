import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicjeComponent } from './definicje.component';

describe('DefinicjeComponent', () => {
  let component: DefinicjeComponent;
  let fixture: ComponentFixture<DefinicjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefinicjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
