import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JedenKontaktComponent } from './jeden-kontakt.component';

describe('JedenKontaktComponent', () => {
  let component: JedenKontaktComponent;
  let fixture: ComponentFixture<JedenKontaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JedenKontaktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JedenKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
