import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerListComponent } from './spacer-list.component';

describe('SpacerListComponent', () => {
  let component: SpacerListComponent;
  let fixture: ComponentFixture<SpacerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
