import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitoryCheckComponent } from './dormitory-check.component';

describe('DormitoryCheckComponent', () => {
  let component: DormitoryCheckComponent;
  let fixture: ComponentFixture<DormitoryCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormitoryCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormitoryCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
