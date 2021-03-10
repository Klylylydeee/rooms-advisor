import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdminInfoComponent } from './school-admin-info.component';

describe('SchoolAdminInfoComponent', () => {
  let component: SchoolAdminInfoComponent;
  let fixture: ComponentFixture<SchoolAdminInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAdminInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAdminInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
