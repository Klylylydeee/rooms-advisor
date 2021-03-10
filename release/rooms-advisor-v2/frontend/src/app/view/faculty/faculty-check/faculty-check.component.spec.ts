import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCheckComponent } from './faculty-check.component';

describe('FacultyCheckComponent', () => {
  let component: FacultyCheckComponent;
  let fixture: ComponentFixture<FacultyCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
