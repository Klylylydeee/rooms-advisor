import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestingComponent } from './view-testing.component';

describe('ViewTestingComponent', () => {
  let component: ViewTestingComponent;
  let fixture: ComponentFixture<ViewTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
