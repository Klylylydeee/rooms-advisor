import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitoryEditComponent } from './dormitory-edit.component';

describe('DormitoryEditComponent', () => {
  let component: DormitoryEditComponent;
  let fixture: ComponentFixture<DormitoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormitoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormitoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
