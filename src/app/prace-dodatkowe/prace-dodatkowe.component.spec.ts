import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraceDodatkoweComponent } from './prace-dodatkowe.component';

describe('PraceDodatkoweComponent', () => {
  let component: PraceDodatkoweComponent;
  let fixture: ComponentFixture<PraceDodatkoweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraceDodatkoweComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraceDodatkoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
