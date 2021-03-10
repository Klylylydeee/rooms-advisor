import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitoryCreateComponent } from './dormitory-create.component';

describe('DormitoryCreateComponent', () => {
  let component: DormitoryCreateComponent;
  let fixture: ComponentFixture<DormitoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormitoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormitoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
