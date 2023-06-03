import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmowyTableComponent } from './umowy-table.component';

describe('UmowyTableComponent', () => {
  let component: UmowyTableComponent;
  let fixture: ComponentFixture<UmowyTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UmowyTableComponent]
    });
    fixture = TestBed.createComponent(UmowyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
