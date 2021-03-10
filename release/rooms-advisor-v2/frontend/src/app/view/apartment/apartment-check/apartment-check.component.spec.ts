import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentCheckComponent } from './apartment-check.component';

describe('ApartmentCheckComponent', () => {
  let component: ApartmentCheckComponent;
  let fixture: ComponentFixture<ApartmentCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
